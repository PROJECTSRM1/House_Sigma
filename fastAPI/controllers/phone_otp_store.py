import random
import time
from typing import Dict, Any

PHONE_OTP_STORAGE: Dict[str, Dict[str, Any]] = {}

OTP_LENGTH = 6
OTP_LIFETIME_SECONDS = 120


def generate_phone_otp() -> str:
    return "".join(random.choices("0123456789", k=OTP_LENGTH))


def save_phone_otp(phone: str, otp: str):
    PHONE_OTP_STORAGE[phone] = {
        "otp": otp,
        "expiry_time": time.time() + OTP_LIFETIME_SECONDS,
    }


def verify_phone_otp(phone: str, otp: str) -> bool:
    if phone not in PHONE_OTP_STORAGE:
        return False

    stored = PHONE_OTP_STORAGE[phone]

    if time.time() > stored["expiry_time"]:
        del PHONE_OTP_STORAGE[phone]
        return False

    if stored["otp"] != otp:
        return False

    del PHONE_OTP_STORAGE[phone]
    return True
