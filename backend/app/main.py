from fastapi import FastAPI
from app.routers import convert

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to IPA to SAMPA converter API"}

app.include_router(convert.router)