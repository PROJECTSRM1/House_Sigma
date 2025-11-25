from fastapi import APIRouter
from services.gemini_service import generate_reply

router = APIRouter(prefix="/api", tags=["Chatbot"])

@router.post("/chatbot")
async def chat(data: dict):
    user_message = data.get("message", "")
    bot_reply = generate_reply(user_message)
    return {"response": bot_reply}
