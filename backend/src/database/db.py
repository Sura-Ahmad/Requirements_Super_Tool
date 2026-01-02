from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base #sqlalcjemy create a base class for models

DATABASE_URL = "sqlite:///./pre_elicitation.db"

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(
    autocommit=False,    # means I have to use db.commit to save changes not automatically
    autoflush=False,
    bind=engine
)

Base = declarative_base()

#engine is a connection point between python and sqlite database