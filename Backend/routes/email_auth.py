from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer
import jwt
import os

# MODELS
from models.email_verify_schema import (
    EmailRequest,
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
    check_name_exists,
    validate_password
)

# JWT TOKENS
from utils.jwt_handler import (
    create_access_token,
    create_refresh_token,
    verify_token   # <-- imported token verification
)

# PASSWORD HASHING
from passlib.context import CryptContext
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain: str, hashed: str):
    return pwd_context.verify(plain, hashed)


# ----------------------------------------------------
# ROUTER
# ----------------------------------------------------
router = APIRouter(prefix="/api/auth", tags=["Authentication"])


# --------------------------------------------------------
# 1️⃣ SIGNUP → SEND OTP
# --------------------------------------------------------
@router.post("/sign", response_model=MessageResponse)
async def request_otp(request: EmailRequest):

    name = request.name.strip()
    email = request.email.lower().strip()
    password = request.password.strip()

    # VALIDATIONS
    validate_email_format(email)
    check_email_exists(email)
    check_name_exists(name)
    validate_password(password)

    # HASH PASSWORD BEFORE SAVING
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


# --------------------------------------------------------
# 2️⃣ VERIFY OTP → COMPLETE SIGNUP
# --------------------------------------------------------
# @router.post("/sign/otp", response_model=MessageResponse)
# async def verify_otp_endpoint(request: OTPVerify):

#     email = verify_otp(request.otp)

#     if not email:
#         raise HTTPException(400, "Invalid or expired OTP")

#     if email not in pending_users:
#         raise HTTPException(400, "No pending signup found")

#     data = pending_users[email]

#     users_db.append({
#         "id": len(users_db) + 1,
#         "name": data["name"],
#         "email": email,
#         "password": data["password"],   # HASHED PASSWORD
#         "is_verified": True,
#         "is_logged_in": False
#     })

#     del pending_users[email]

#     return MessageResponse(
#         message="User registered successfully!",
#         status="verified"
#     )

@router.post("/sign/otp")
async def verify_otp_endpoint(request: OTPVerify):

    email = verify_otp(request.otp)

    if not email:
        raise HTTPException(400, "Invalid or expired OTP")

    if email not in pending_users:
        raise HTTPException(400, "No pending signup found")

    data = pending_users[email]

    user = {
        "id": len(users_db) + 1,
        "name": data["name"],
        "email": email,
        "password": data["password"],
        "is_verified": True,
        "is_logged_in": True
    }

    users_db.append(user)
    del pending_users[email]

    # ✅ CREATE TOKENS AFTER SIGNUP
    access_token = create_access_token({"id": user["id"], "email": user["email"]})
    refresh_token = create_refresh_token({"id": user["id"], "email": user["email"]})

    active_sessions[user["email"]] = True

    return {
        "message": "User registered & logged in",
        "status": "success",
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer",
        "user": {
            "id": user["id"],
            "name": user["name"],
            "email": user["email"]
        }
    }


# --------------------------------------------------------
# 3️⃣ LOGIN
# --------------------------------------------------------
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

    # GENERATE TOKENS
    access_token = create_access_token({"id": user["id"], "email": user["email"]})
    refresh_token = create_refresh_token({"id": user["id"], "email": user["email"]})

    active_sessions[user["email"]] = True

    return {
        "message": "Login successful",
        "status": "success",
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer",
        "user": {
            "id": user["id"],
            "name": user["name"],
            "email": user["email"]
        }
    }


# --------------------------------------------------------
# 4️⃣ GET ALL USERS (DEBUG)
# --------------------------------------------------------
@router.get("/users")
def show_users():
    return users_db


# --------------------------------------------------------
# 5️⃣ LOGOUT
# --------------------------------------------------------
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


# --------------------------------------------------------
# 6️⃣ DELETE USER
# --------------------------------------------------------
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


# --------------------------------------------------------
# 7️⃣ PROTECTED ROUTE — JWT REQUIRED
# --------------------------------------------------------
@router.get("/me")
def get_current_user(user=Depends(verify_token)):
    return {
        "message": "Authenticated user",
        "user": user
    }
