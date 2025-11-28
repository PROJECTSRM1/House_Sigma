from fastapi import FastAPI  
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

from routes.email_auth import router as email_router
from routes.google_auth import router as google_router
from routes.chat_router import router as chatbot_router
from routes.linkedin import router as linkedin_router
from routes.facebook import router as facebook_router



app = FastAPI(title="Python FastAPI MVC Backend")

# ✅ Mount static folder
app.mount(
    "/static",
    StaticFiles(directory=os.path.join(os.path.dirname(__file__), "static")),
    name="static"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080", 
        "http://127.0.0.1:8080"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(email_router)
# app.include_router(login_router)
# app.include_router(phone_router)
app.include_router(google_router)
app.include_router(chatbot_router)
app.include_router(linkedin_router)
app.include_router(facebook_router)
@app.get("/")
def home():
    return {"message": "FastAPI Backend Running"}
