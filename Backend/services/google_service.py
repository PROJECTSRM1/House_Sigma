from google.oauth2 import id_token
from google.auth.transport import requests
from fastapi import HTTPException

GOOGLE_CLIENT_ID = "419610409681-jk6mku5flon3s9onielvnrckiq7utdek.apps.googleusercontent.com"

def verify_google_token(token: str):
    try:
        # Verify token with Google
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
