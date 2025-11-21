import re
from fastapi import HTTPException, status
from models.user_db import users_db
from models.pending_users import pending_users

# ---------------- EMAIL REGEX ----------------
EMAIL_REGEX = r"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"


def validate_email_format(email: str):
    """Check if email format is correct."""
    if not re.match(EMAIL_REGEX, email):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid email format. Please enter a valid email."
        )


def check_email_exists(email: str):
    """Check if email already registered or pending OTP."""
    # Check in registered users
    for user in users_db:
        if user["email"].lower() == email.lower():
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered. Please login instead."
            )

    # Check pending OTP users
    if email.lower() in (e.lower() for e in pending_users.keys()):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="OTP already sent to this email. Please verify the OTP."
        )


# ---------------- NAME (USERNAME) VALIDATION ----------------
def check_name_exists(name: str):
    for user in users_db:
        if user["name"].lower() == name.lower():
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Name already taken. Please choose a different one."
            )


# ---------------- PASSWORD VALIDATION ----------------
def validate_password(password: str):
    if len(password) < 6:
        raise HTTPException(400, "Password must be at least 6 characters long.")

    if not re.search(r"[A-Za-z]", password):
        raise HTTPException(400, "Password must contain at least 1 letter.")

    if not re.search(r"[0-9]", password):
        raise HTTPException(400, "Password must contain at least 1 number.")

    if not re.search(r"[!@#$%^&*?_]", password):
        raise HTTPException(
            400,
            "Password must contain at least 1 special character (!, @, #, $, %, ^, &, *, ?)."
        )


# ---------------- PHONE NUMBER VALIDATION ----------------
PHONE_REGEX = r"^[6-9]\d{9}$"


def validate_phone_format(phone: str):
    """Validate 10-digit Indian phone number starting with 6/7/8/9."""
    if not re.match(PHONE_REGEX, phone):
        raise HTTPException(
            status_code=400,
            detail="Invalid phone number. Must be 10 digits and start with 6, 7, 8, or 9."
        )


def check_phone_exists(phone: str):
    """Check if phone number already exists in registered users."""
    for user in users_db:
        if user.get("phone") == phone:
            raise HTTPException(
                status_code=400,
                detail="Phone number already registered."
            )
