from fastapi import FastAPI  
from fastapi.middleware.cors import CORSMiddleware

from routes.email_auth import router as email_router
from routes.phone_auth import router as phone_router

from routes.login_auth import router as login_router


app = FastAPI(title="Python FastAPI MVC Backend")

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
app.include_router(phone_router)
app.include_router(login_router)

@app.get("/")
def home():
    return {"message": "FastAPI Backend Running"}
