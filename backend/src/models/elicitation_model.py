from pydantic import BaseModel

class ElicitationQuestion(BaseModel):
    question: str
