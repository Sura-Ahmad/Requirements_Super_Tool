from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.api.domain_routes import router as domain_router
from src.api.pre_elicitation_routes import router as pre_router
from src.database.db import engine
from src.database.models import Base

app = FastAPI(title="Requirements Super Tool")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(domain_router)
app.include_router(pre_router)
