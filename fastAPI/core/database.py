from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv
import os
import urllib.parse

load_dotenv()

HOST = os.getenv("DB_HOST", "127.0.0.1")
PORT = os.getenv("DB_PORT", "5432")
NAME = os.getenv("DB_NAME", "postgres")
USER = os.getenv("DB_USER", "postgres")
PASSWORD = os.getenv("DB_PASSWORD", "")

USER_ENC = urllib.parse.quote_plus(USER)
PASSWORD_ENC = urllib.parse.quote_plus(PASSWORD)

# DATABASE_URL = f"postgresql+psycopg://{USER_ENC}:{PASSWORD_ENC}@{HOST}:{PORT}/{NAME}"

DATABASE_URL = f"postgresql+psycopg://{USER_ENC}:{PASSWORD_ENC}@{HOST}:{PORT}/{NAME}"

engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    future=True,
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
