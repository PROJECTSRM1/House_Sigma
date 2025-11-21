from pydantic import BaseModel, EmailStr, Field
from typing import Optional


class EmailRequest(BaseModel):
    name: str
    email: EmailStr
    password: str

class OTPVerify(BaseModel):
    otp: str

class MessageResponse(BaseModel):
    message: str
    status: Optional[str] = "success"

class LoginRequest(BaseModel):
    username_or_email: str
    password: str








class PhoneRequest(BaseModel):
    name: str
    phone: str = Field(pattern=r"^[6-9]\d{9}$")
    password: str

class PhoneOTPVerify(BaseModel):
    phone: str = Field(pattern=r"^[6-9]\d{9}$")
    otp: str



