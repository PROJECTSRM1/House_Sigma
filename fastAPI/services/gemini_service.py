import google.generativeai as genai
from dotenv import load_dotenv
from utils.prompt import SYSTEM_PROMPT
import os

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("models/gemini-2.5-flash")

def generate_reply(user_message: str):
    """Generate a chatbot response using Gemini model."""
    
    response = model.generate_content(
        SYSTEM_PROMPT + "\nUser: " + user_message
    )
    
    return response.text
