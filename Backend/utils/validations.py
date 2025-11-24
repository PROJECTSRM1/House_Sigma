import re
from fastapi import HTTPException, status
from models.user_db import users_db
from models.pending_users import pending_users

# ---------------- STRICT GMAIL-ONLY REGEX ----------------
GMAIL_REGEX = r"^[A-Za-z0-9._%+-]+@gmail\.com$"


def validate_email_format(email: str):
    """Check if email is a valid Gmail address."""
    if not re.match(GMAIL_REGEX, email):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid email. Only Gmail addresses (example@gmail.com) are allowed."
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

def validate_password(password: str):

    # bcrypt limit
    if len(password) > 72:
        raise HTTPException(
            status_code=400,
            detail="Password cannot exceed 72 characters (bcrypt limitation)."
        )

    if len(password) < 6:
        raise HTTPException(
            status_code=400,
            detail="Password must be at least 6 characters long."
        )

    if not re.search(r"[A-Za-z]", password):
        raise HTTPException(
            status_code=400,
            detail="Password must contain at least 1 letter."
        )

    if not re.search(r"[0-9]", password):
        raise HTTPException(
            status_code=400,
            detail="Password must contain at least 1 number."
        )

    if not re.search(r"[!@#$%^&*?_]", password):
        raise HTTPException(
            status_code=400,
            detail="Password must contain at least 1 special character (!@#$%^&*?_)."
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
