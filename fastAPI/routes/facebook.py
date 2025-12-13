from fastapi import APIRouter, HTTPException
from fastapi.responses import RedirectResponse
import requests
import os
from dotenv import load_dotenv
from sqlalchemy.orm import Session
from fastapi import Depends
from datetime import datetime

from core.database import get_db
from models.user_model import UserRegistration
from utils.jwt_handler import create_access_token, create_refresh_token

load_dotenv()

router = APIRouter(prefix="/api/auth/facebook", tags=["Facebook Auth"])

FACEBOOK_CLIENT_ID = os.getenv("FACEBOOK_CLIENT_ID")
FACEBOOK_CLIENT_SECRET = os.getenv("FACEBOOK_CLIENT_SECRET")
FACEBOOK_REDIRECT_URI = os.getenv("FACEBOOK_REDIRECT_URI")


# 1️⃣ Redirect to Facebook Login
@router.get("/login")
def facebook_login():
    url = (
        "https://www.facebook.com/v18.0/dialog/oauth"
        f"?client_id={FACEBOOK_CLIENT_ID}"
        f"&redirect_uri={FACEBOOK_REDIRECT_URI}"
        "&scope=email,public_profile"
    )
    return RedirectResponse(url)

@router.get("/callback")
def facebook_callback(code: str, db: Session = Depends(get_db)):
    token_url = (
        "https://graph.facebook.com/v18.0/oauth/access_token"
        f"?client_id={FACEBOOK_CLIENT_ID}"
        f"&redirect_uri={FACEBOOK_REDIRECT_URI}"
        f"&client_secret={FACEBOOK_CLIENT_SECRET}"
        f"&code={code}"
    )

    token_res = requests.get(token_url).json()
    if "access_token" not in token_res:
        raise HTTPException(400, "Facebook login failed")

    fb_access_token = token_res["access_token"]

    user_info = requests.get(
        f"https://graph.facebook.com/me?fields=id,name,email&access_token={fb_access_token}"
    ).json()

    email = user_info.get("email")
    name = user_info.get("name")

    if not email:
        raise HTTPException(400, "Facebook did not return an email")
    user = db.query(UserRegistration).filter(UserRegistration.email == email).first()

    if not user:
        user = UserRegistration(
            full_name=name,
            email=email,
            password=None,
            role_id=1,
            created_date=datetime.utcnow(),
            created_by=None,
            is_active=True
        )
        db.add(user)
        db.commit()
        db.refresh(user)

    access = create_access_token({"id": user.id, "email": user.email})
    refresh = create_refresh_token({"id": user.id, "email": user.email})

    return {
        "message": "Facebook login successful",
        "access_token": access,
        "refresh_token": refresh,
        "user": {
            "id": user.id,
            "name": user.full_name,
            "email": user.email
        }
    }
