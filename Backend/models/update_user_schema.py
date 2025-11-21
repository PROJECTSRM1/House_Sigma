
from pydantic import BaseModel,EmailStr,Field
from typing import Optional


class UpdateUserRequest(BaseModel):
    old_name : str
    name : Optional[str] = None
    email : Optional[EmailStr] = None
    password : Optional[str] = None

class UpdateUserResponse(BaseModel):
    message:str
    status:str="success"

    