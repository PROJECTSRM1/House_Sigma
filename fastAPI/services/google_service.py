
from google.oauth2 import id_token
from google.auth.transport import requests
from fastapi import HTTPException

GOOGLE_CLIENT_ID = "419610409681-u3s5mk5pp24gpn9rmp1krvbq0emmbijh.apps.googleusercontent.com"

def verify_google_token(token: str):
    try:
   
        idinfo = id_token.verify_oauth2_token(
            token,
            requests.Request(),
            GOOGLE_CLIENT_ID
        )

        email = idinfo.get("email")
        name = idinfo.get("name") or email.split("@")[0]

        return {"email": email, "name": name}

    except Exception as e:
        print("Google verification failed:", e)
        raise HTTPException(status_code=400, detail="Invalid Google token")
