from fastapi import APIRouter, HTTPException
from models.email_verify_schema import PhoneRequest, PhoneOTPVerify, MessageResponse
from utils.validations import (
    validate_phone_format,
    check_phone_exists,
    validate_password
)
from controllers.phone_otp_store import (
    generate_phone_otp,
    save_phone_otp,
    verify_phone_otp
)
from services.sms_service import send_sms_otp
from models.pending_users import pending_users
from models.user_db import users_db

router = APIRouter(prefix="/api/phone", tags=["Phone OTP"])


@router.post("/phone", response_model=MessageResponse)
async def phone_sign(request: PhoneRequest):

    name = request.name
    phone = request.phone
    password = request.password

    validate_phone_format(phone) 
    check_phone_exists(phone)      
    validate_password(password)

    pending_users[phone] = {
        "name": name,
        "phone": phone,
        "password": password
    }

    otp = generate_phone_otp()
    save_phone_otp(phone, otp)
    send_sms_otp(phone, otp)

    return MessageResponse(
        message=f"OTP sent to {phone}",
        status="pending_verification"
    )

@router.post("/phone/otp", response_model=MessageResponse)
async def phone_verify(request: PhoneOTPVerify):

    phone = request.phone
    otp = request.otp

    if not verify_phone_otp(phone, otp):
        raise HTTPException(400, "Invalid or expired OTP")

    if phone not in pending_users:
        raise HTTPException(400, "Phone verification not found")

    user_data = pending_users[phone]

    users_db.append({
        "name": user_data["name"],
        "email": None,
        "phone": phone,
        "password": user_data["password"]
    })

    del pending_users[phone]

    return MessageResponse(
        message="Phone OTP verified and user registered.",
        status="verified"
    )
