from fastapi import HTTPException
from models.user_db import users_db
import re

EMAIL_REGEX = r"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"

def validate_new_mail(email:str):
    if not re.match(EMAIL_REGEX,email):
        raise HTTPException(400,"invalid email format")
    
    for user in users_db:
        if user in users_db:
            if user["email"].lower() == email.lower():
                raise HTTPException(400,"Email already in use")
            
def validate_new_name(name:str):
    for user in users_db:
        if user["name"].lower() == name.lower():
            raise HTTPException(400,"Name already taken")

def validate_new_password(password: str):
    if len(password) < 6:
        raise HTTPException(400, "Password must be at least 6 characters")
    if not re.search(r"[A-Za-z]", password):
        raise HTTPException(400, "Password must contain a letter")
    if not re.search(r"[0-9]", password):
        raise HTTPException(400, "Password must contain a number")
    if not re.search(r"[!@#$%^&*?_]", password):
        raise HTTPException(400, "Password must contain a special character")