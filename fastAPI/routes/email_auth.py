from fastapi import APIRouter, HTTPException, Depends, UploadFile, File, Form
import os

# MODELS
from models.email_verify_schema import (
    EmailRequest,
    ForgotPasswordOTPVerify,
    ForgotPasswordRequest,
    OTPVerify,
    MessageResponse,
    LoginRequest
)
from models.pending_users import pending_users
from models.user_db import users_db
from models.session_store import active_sessions

# OTP SERVICES
from controllers.otp_store import generate_otp, save_otp, verify_otp
from services.otp_service import send_otp_email

# VALIDATIONS
from utils.validations import (
    validate_email_format,
    check_email_exists,
    validate_password
)

# JWT TOKENS
from utils.jwt_handler import (
    create_access_token,
    create_refresh_token,
    verify_token
)

# PASSWORD HASHING
from passlib.context import CryptContext
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain: str, hashed: str):
    return pwd_context.verify(plain, hashed)


BASE_DIR = "app/static"
ALLOWED_FOLDERS = ["users", "documents", "photos", "avatars", "camera_uploads"]

router = APIRouter(prefix="/api/auth", tags=["Authentication"])


def get_profile_image(email: str):
    safe_email = email.replace("@", "_").replace(".", "_").lower()

    for folder in ALLOWED_FOLDERS:
        path = f"{BASE_DIR}/{folder}/{safe_email}.jpg"
        if os.path.exists(path):
            return f"http://localhost:8000/static/{folder}/{safe_email}.jpg"

    return "http://localhost:8000/static/users/default.png"


@router.post("/sign", response_model=MessageResponse)
async def request_otp(request: EmailRequest):

    name = request.name.strip()
    email = request.email.lower().strip()
    password = request.password.strip()

    validate_email_format(email)
    check_email_exists(email)     
    validate_password(password)

    hashed_pwd = hash_password(password)

    pending_users[email] = {
        "name": name,
        "password": hashed_pwd
    }

    try:
        otp = generate_otp()
        save_otp(email, otp)
        send_otp_email(email, otp)

        return MessageResponse(
            message="OTP sent successfully!",
            status="pending_verification"
        )

    except Exception as e:
        raise HTTPException(500, f"Email sending failed: {str(e)}")


@router.post("/sign/otp", response_model=MessageResponse)
async def verify_otp_endpoint(request: OTPVerify):

    email = verify_otp(request.otp)

    if not email:
        raise HTTPException(400, "Invalid or expired OTP")

    if email not in pending_users:
        raise HTTPException(400, "No pending signup found")

    data = pending_users[email]

    users_db.append({
        "id": len(users_db) + 1,
        "name": data["name"],
        "email": email,
        "password": data["password"],
        "is_verified": True,
        "is_logged_in": False
    })

    del pending_users[email]

    return MessageResponse(
        message="User registered successfully!",
        status="verified"
    )


@router.post("/login")
async def login_user(request: LoginRequest):

    username = request.username_or_email.strip().lower()
    password = request.password.strip()

    user = next(
        (u for u in users_db
         if u["email"].lower() == username
         or u["name"].lower() == username),
        None
    )

    if user is None:
        raise HTTPException(400, "User not found")

    if not verify_password(password, user["password"]):
        raise HTTPException(400, "Invalid password")

    access_token = create_access_token({"id": user["id"], "email": user["email"]})
    refresh_token = create_refresh_token({"id": user["id"], "email": user["email"]})

    active_sessions[user["email"]] = True

    profile_image_url = get_profile_image(user["email"])

    return {
        "message": "Login successful",
        "status": "success",
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer",
        "user": {
            "id": user["id"],
            "name": user["name"],
            "email": user["email"],
            "profile_image": profile_image_url
        }
    }


@router.post("/upload-image")
async def upload_image(
    email: str = Form(...),
    folder: str = Form(...),
    image: UploadFile = File(...)
):

    folder = folder.strip()

    if folder not in ALLOWED_FOLDERS:
        raise HTTPException(400, f"Invalid folder. Choose from: {ALLOWED_FOLDERS}")

    upload_path = os.path.join(BASE_DIR, folder)
    os.makedirs(upload_path, exist_ok=True)

    safe_email = email.replace("@", "_").replace(".", "_").lower()
    filename = f"{safe_email}.jpg"
    file_path = os.path.join(upload_path, filename)

    if not image.filename.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
        raise HTTPException(400, "Only JPG/PNG/WEBP allowed")

    with open(file_path, "wb") as f:
        f.write(await image.read())

    image_url = f"http://localhost:8000/static/{folder}/{filename}"

    return {
        "status": "success",
        "message": f"Image uploaded successfully to {folder}",
        "image_url": image_url
    }


@router.post("/forgot-password", response_model=MessageResponse)
async def forgot_password(request: ForgotPasswordRequest):
    email = request.email.lower().strip()

    user = next((u for u in users_db if u["email"] == email), None)
    if not user:
        raise HTTPException(400, "Email not registered")

    try:
        otp = generate_otp()
        save_otp(email, otp)
        send_otp_email(email, otp)

        return MessageResponse(
            message="OTP sent to your email for password reset",
            status="otp_sent"
        )

    except Exception as e:
        raise HTTPException(500, f"Error sending OTP: {str(e)}")


@router.post("/forgot-password/verify", response_model=MessageResponse)
async def forgot_password_verify(request: ForgotPasswordOTPVerify):

    email = request.email.lower().strip()
    otp = request.otp.strip()
    new_password = request.new_password.strip()

    verified_email = verify_otp(otp)
    if verified_email != email:
        raise HTTPException(400, "Invalid or expired OTP")

    user = next((u for u in users_db if u["email"] == email), None)
    if not user:
        raise HTTPException(400, "User not found")

    if verify_password(new_password, user["password"]):
        raise HTTPException(
            status_code=400,
            detail="New password cannot be same as old password."
        )

    validate_password(new_password)

    user["password"] = hash_password(new_password)

    return MessageResponse(
        message="Password reset successful. You can now login.",
        status="password_reset"
    )


@router.post("/logout")
async def logout_user(username_or_email: str):

    username_or_email = username_or_email.strip().lower()

    user = next(
        (u for u in users_db
         if u["email"].lower() == username_or_email
         or u["name"].lower() == username_or_email),
        None
    )

    if not user:
        raise HTTPException(400, "User not found")

    if active_sessions.get(user["email"]) != True:
        raise HTTPException(400, "You are not logged in")

    del active_sessions[user["email"]]

    return {"message": "Logout successful!", "status": "logged_out"}


@router.delete("/delete-user")
async def delete_user(username_or_email: str):

    username_or_email = username_or_email.strip().lower()

    index = next(
        (i for i, u in enumerate(users_db)
         if u["email"].lower() == username_or_email
         or u["name"].lower() == username_or_email),
        None
    )

    if index is None:
        raise HTTPException(400, "User not found")

    user = users_db[index]

    if user["email"] in active_sessions:
        del active_sessions[user["email"]]

    del users_db[index]

    return {"message": "User deleted successfully", "status": "user_deleted"}



@router.get("/me")
def get_current_user(user=Depends(verify_token)):
    return {
        "message": "Authenticated user",
        "user": user
    }
