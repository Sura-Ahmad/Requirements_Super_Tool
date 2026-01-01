from fastapi import FastAPI                                     #import FastApi class from FatApi library for endpoint creation
from fastapi.middleware.cors import CORSMiddleware              #allow frontend to interact with backend
from src.api.domain_routes import router as domain_router
from src.api.pre_elicitation_routes import router as pre_router
from src.database.db import engine                              # to communicate with the database
from src.database.models import Base                            # Base is the parent class for all the database models(db schema/tables)

app = FastAPI(title="Requirements Super Tool")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine) #create the database tables based on the defined models

app.include_router(domain_router) # end points ready to recieve requests
app.include_router(pre_router)    # end points ready to recieve requests

# CORSMiddleware include the common between requests
# CORS also gives permission to the browser to interact with backend