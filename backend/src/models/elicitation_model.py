from pydantic import BaseModel

class ElicitationQuestion(BaseModel):
    category: str
    question: str
