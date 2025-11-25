from fastapi import APIRouter, HTTPException
import requests
import os
from dotenv import load_dotenv

load_dotenv()  # Load .env file

router = APIRouter(prefix="/api/auth", tags=["LinkedIn Auth"])

# Load from .env
LINKEDIN_CLIENT_ID = os.getenv("LINKEDIN_CLIENT_ID")
LINKEDIN_CLIENT_SECRET = os.getenv("LINKEDIN_CLIENT_SECRET")
REDIRECT_URI = os.getenv("LINKEDIN_REDIRECT_URI")

# 1️⃣ Redirect user to LinkedIn login
@router.get("/linkedin/login")
def linkedin_login():
    if not LINKEDIN_CLIENT_ID:
        raise HTTPException(500, "LinkedIn CLIENT_ID missing in .env")

    linkedin_auth_url = (
        "https://www.linkedin.com/oauth/v2/authorization"
        f"?response_type=code&client_id={LINKEDIN_CLIENT_ID}"
        f"&redirect_uri={REDIRECT_URI}"
        "&scope=r_liteprofile%20r_emailaddress"
    )
    return {"auth_url": linkedin_auth_url}


# 2️⃣ LinkedIn → return CODE → we exchange to get access token
@router.get("/linkedin/callback")
def linkedin_callback(code: str):

    token_url = "https://www.linkedin.com/oauth/v2/accessToken"

    data = {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": REDIRECT_URI,
        "client_id": LINKEDIN_CLIENT_ID,
        "client_secret": LINKEDIN_CLIENT_SECRET,
    }

    token_res = requests.post(token_url, data=data)
    token_json = token_res.json()

    if "access_token" not in token_json:
        raise HTTPException(400, "Invalid token exchange response")

    access_token = token_json["access_token"]

    headers = {"Authorization": f"Bearer {access_token}"}

    profile_res = requests.get("https://api.linkedin.com/v2/me", headers=headers)
    email_res = requests.get(
        "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
        headers=headers
    )

    profile = profile_res.json()
    email_data = email_res.json()

    try:
        email = email_data["elements"][0]["handle~"]["emailAddress"]
    except:
        email = None

    return {
        "status": "success",
        "linkedin_id": profile.get("id"),
        "first_name": profile.get("localizedFirstName"),
        "last_name": profile.get("localizedLastName"),
        "email": email
    }
