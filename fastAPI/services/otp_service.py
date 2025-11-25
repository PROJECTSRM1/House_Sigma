import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os

from models.email_verify_schema import EmailRequest
from models.user_db import users_db

# ✅ Import password hasher
from passlib.context import CryptContext
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd_context.hash(password)

load_dotenv()

SENDER_EMAIL = os.getenv("MAIL_FROM")
SENDER_PASSWORD = os.getenv("MAIL_PASSWORD")
SMTP_SERVER = os.getenv("MAIL_SERVER")
SMTP_PORT = int(os.getenv("MAIL_PORT", 587))

def send_otp_email(receiver_email: str, otp: str):
    if not SENDER_EMAIL or not SENDER_PASSWORD:
        raise ValueError("Email credentials not properly configured in .env")

    message = MIMEMultipart("alternative")
    message["Subject"] = "Your OTP Verification Code"
    message["From"] = SENDER_EMAIL
    message["To"] = receiver_email

    html = f"""
    <html>
    <body>
        <h2>Your OTP Code: <b>{otp}</b></h2>
        <p>This OTP is valid for 2 minutes.</p>
    </body>
    </html>
    """

    message.attach(MIMEText(html, "html"))

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.sendmail(SENDER_EMAIL, receiver_email, message.as_string())
    except Exception as e:
        print("Email send error:", e)
        raise RuntimeError("Failed to send OTP email")

def signup_service(data: EmailRequest):

    for u in users_db:
        if u["email"].lower() == data.email.lower():
            return {"error": "Email already registered"}

    hashed_pwd = hash_password(data.password)

    new_user = {
        "id": len(users_db) + 1,
        "name": data.name,
        "email": data.email.lower(),
        "password": hashed_pwd,  
        "is_verified": True,
        "is_logged_in": False
    }

    users_db.append(new_user)

    return {
        "message": "Signup successful",
        "email": data.email
    }
