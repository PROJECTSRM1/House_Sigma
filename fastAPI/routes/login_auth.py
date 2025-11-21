from fastapi import APIRouter, HTTPException
from models.email_verify_schema import MessageResponse, LoginRequest
from models.user_db import users_db

router = APIRouter(prefix="/api/login", tags=["Login"])

@router.get("/debug")
def show_users():
    return users_db

@router.post("/", response_model=MessageResponse)
async def login_user(request: LoginRequest):
    username_or_email = request.username_or_email
    password = request.password

    if not username_or_email or not password:
        raise HTTPException(400, "Username/Email and password are required")

    user = next(
        (
            u for u in users_db
            if u["name"].lower() == username_or_email.lower()
            or u["email"].lower() == username_or_email.lower()
        ),
        None,
    )

    if user is None:
        raise HTTPException(400, "User not found")

    if user["password"] != password:
        raise HTTPException(400, "Invalid password")

    return MessageResponse(
        message="Login successful",
        status="success"
    )
