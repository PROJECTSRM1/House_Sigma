from fastapi import APIRouter
from models.google_login import GoogleLoginRequest
from models.user_db import users_db
from models.session_store import active_sessions
from services.google_service import verify_google_token

router = APIRouter(prefix="/api/auth", tags=["Google Auth"])

@router.post("/google")
async def google_login(request: GoogleLoginRequest):

    google_data = verify_google_token(request.token)

    email = google_data["email"]
    name = google_data["name"]

    user = next((u for u in users_db if u["email"].lower() == email.lower()), None)

    if user is None:
        users_db.append({
            "name": name,
            "email": email,
            "password": None,  
        })

    active_sessions[name] = True

    return {
        "message": "Google login successful",
        "email": email,
        "name": name
    }
