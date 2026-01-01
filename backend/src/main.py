from fastapi import FastAPI                                     #import FastApi class from FatApi library for endpoint creation
from fastapi.middleware.cors import CORSMiddleware              #allow frontend to interact with backend
from src.api.domain_routes import router as domain_router
from src.api.pre_elicitation_routes import router as pre_router
from src.database.db import engine                              # to communicate with the database
from src.database.models import Base                            # Base is the parent class for all the database models(db schema/tables)

app = FastAPI(title="Requirements Super Tool")

app.add_middleware(
    CORSMiddleware,         #without it React cannot ineract with FastAPI backend
    allow_origins=[
        "http://localhost:5175",
        "http://127.0.0.1:5175",
    ],    # * means all origins are allowed to interact with backend(react/browser/postman etc)
    allow_credentials=True, # cookies/tokens 
    allow_methods=["*"],    # all requsets(get/put/post...etc)
    allow_headers=["*"],    # content-type/authorization...etc  
)

Base.metadata.create_all(bind=engine) #create the database tables based on the defined models

app.include_router(domain_router) # end points ready to recieve requests
app.include_router(pre_router)    # end points ready to recieve requests

# CORSMiddleware include the common between requests
# CORS also gives permission to the browser to interact with backend