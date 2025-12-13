from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime

from models.google_login import GoogleLoginRequest
from models.user_model import UserRegistration
from services.google_service import verify_google_token
from utils.jwt_handler import create_access_token, create_refresh_token
from core.database import get_db


router = APIRouter(prefix="/api/auth", tags=["Google Auth"])


@router.post("/google")
async def google_login(request: GoogleLoginRequest, db: Session = Depends(get_db)):

    google_data = verify_google_token(request.token)

    email = google_data.get("email")
    name = google_data.get("name")

    if not email:
        raise HTTPException(400, "Google account has no email")

    user = db.query(UserRegistration).filter(UserRegistration.email == email).first()

    if not user:
        user = UserRegistration(
            full_name=name,
            email=email,
            password=None,            
            mobile=None,
            city_id=None,
            role_id=1,
            created_by=None,
            created_date=datetime.utcnow(),
            modified_by=None,
            modified_date=None,
            is_active=True            
        )

        db.add(user)
        db.commit()
        db.refresh(user)

    access_token = create_access_token({"id": user.id, "email": user.email})
    refresh_token = create_refresh_token({"id": user.id, "email": user.email})

    return {
        "message": "Google login successful",
        "status": "success",
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "name": user.full_name,
            "email": user.email
        }
    }
