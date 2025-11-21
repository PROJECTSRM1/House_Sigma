from fastapi import APIRouter, HTTPException
from models.email_verify_schema import EmailRequest, OTPVerify, MessageResponse
from controllers.otp_store import generate_otp, save_otp, verify_otp
from services.otp_service import send_otp_email

from utils.validations import (
    validate_email_format,
    check_email_exists,
    check_name_exists,
    validate_password
)

from models.pending_users import pending_users
from models.user_db import users_db

router = APIRouter(prefix="/api", tags=["OTP Authentication"])


# ------------------ SEND OTP -----------------
@router.post("/sign", response_model=MessageResponse)
async def request_otp(request: EmailRequest):

    name = request.name
    email = request.email
    password = request.password

    validate_email_format(email)
    check_email_exists(email)         # 🚀 prevents multiple signups
    check_name_exists(name)
    validate_password(password)

    pending_users[email] = {
        "name": name,
        "password": password
    }

    try:
        otp = generate_otp()
        save_otp(email, otp)
        send_otp_email(email, otp)

        return MessageResponse(
            message=f"OTP sent to {email}",
            status="pending_verification"
        )

    except Exception as e:
        raise HTTPException(500, f"Failed to send OTP email: {str(e)}")


# ------------------ VERIFY OTP -----------------
@router.post("/sign/otp", response_model=MessageResponse)
async def verify_otp_endpoint(request: OTPVerify):

    # verify_otp returns email OR None
    email = verify_otp(request.otp)

    if not email:
        raise HTTPException(400, "Invalid or expired OTP")

    if email not in pending_users:
        raise HTTPException(400, "No pending user found")

    # Save in registered users DB
    user_data = pending_users[email]

    users_db.append({
        "name": user_data["name"],
        "email": email,
        "password": user_data["password"]
    })

    # Remove from pending list
    del pending_users[email]

    return MessageResponse(
        message="OTP verified successfully! User registered.",
        status="verified"
    )
