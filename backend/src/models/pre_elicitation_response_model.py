from pydantic import BaseModel

class PreElicitationResponseInput(BaseModel):
    domain: str
    question: str
    answer: str
