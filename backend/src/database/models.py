from sqlalchemy import Column, Integer, String, Text
from src.database.db import Base

class PreElicitationResponse(Base):
    __tablename__ = "pre_elicitation_responses"

    id = Column(Integer, primary_key=True, index=True)
    domain = Column(String, index=True)
    question = Column(Text)
    answer = Column(Text)
