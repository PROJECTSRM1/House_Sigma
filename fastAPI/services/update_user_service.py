from fastapi import HTTPException
from models.user_db import users_db
from utils.update_validations import (
    validate_new_mail,validate_new_name,validate_new_password
)

def update_user_service(data):
    old_name = data.old_name.lower()

    user = next((u for u in users_db if u["name"].lower()==old_name),None)
    if not user:
        raise HTTPException(404,"User not found")
    

    if data.email:
        validate_new_mail(data.email)
        user["email"] = data.email

    if data.name:
        validate_new_name(data.name)
        user["name"] = data.name

    # ---- Update Password ----
    if data.password:
        validate_new_password(data.password)
        user["password"] = data.password

    return user
