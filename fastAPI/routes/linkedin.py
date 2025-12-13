from fastapi import APIRouter, HTTPException
import requests
import os
from dotenv import load_dotenv
from sqlalchemy.orm import Session
from fastapi import Depends

from core.database import get_db
from models.user_model import UserRegistration
from utils.jwt_handler import create_access_token, create_refresh_token
from datetime import datetime

load_dotenv()

router = APIRouter(prefix="/api/auth/linkedin", tags=["LinkedIn Auth"])

LINKEDIN_CLIENT_ID = os.getenv("LINKEDIN_CLIENT_ID")
LINKEDIN_CLIENT_SECRET = os.getenv("LINKEDIN_CLIENT_SECRET")
LINKEDIN_REDIRECT_URI = os.getenv("LINKEDIN_REDIRECT_URI")

@router.get("/login")
def linkedin_login():
    auth_url = (
        "https://www.linkedin.com/oauth/v2/authorization"
        f"?response_type=code"
        f"&client_id={LINKEDIN_CLIENT_ID}"
        f"&redirect_uri={LINKEDIN_REDIRECT_URI}"
        f"&scope=r_liteprofile%20r_emailaddress"
    )

    return {"auth_url": auth_url}

@router.get("/callback")
def linkedin_callback(code: str, db: Session = Depends(get_db)):

    token_res = requests.post(
        "https://www.linkedin.com/oauth/v2/accessToken",
        data={
            "grant_type": "authorization_code",
            "code": code,
            "redirect_uri": LINKEDIN_REDIRECT_URI,
            "client_id": LINKEDIN_CLIENT_ID,
            "client_secret": LINKEDIN_CLIENT_SECRET,
        },
    ).json()

    if "access_token" not in token_res:
        raise HTTPException(400, "Failed to get access token")

    access_token = token_res["access_token"]
    headers = {"Authorization": f"Bearer {access_token}"}

    profile = requests.get("https://api.linkedin.com/v2/me", headers=headers).json()

    email_data = requests.get(
        "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
        headers=headers,
    ).json()

    email = email_data["elements"][0]["handle~"]["emailAddress"]
    first = profile.get("localizedFirstName", "")
    last = profile.get("localizedLastName", "")
    full_name = f"{first} {last}".strip()

    user = db.query(UserRegistration).filter(UserRegistration.email == email).first()

    if not user:
        user = UserRegistration(
            full_name=full_name,
            email=email,
            password=None,    
            role_id=1,
            created_by=None,
            created_date=datetime.utcnow(),
            is_active=True
        )
        db.add(user)
        db.commit()
        db.refresh(user)

    access_jwt = create_access_token({"id": user.id, "email": user.email})
    refresh_jwt = create_refresh_token({"id": user.id, "email": user.email})

    return {
        "message": "LinkedIn login successful!",
        "access_token": access_jwt,
        "refresh_token": refresh_jwt,
        "user": {
            "id": user.id,
            "name": user.full_name,
            "email": user.email
        }
    }
