from sqlalchemy.orm import Session
from src.database.models import PreElicitationResponse

def store_response(
    db: Session,
    domain: str,
    question: str,
    answer: str
):
    response = PreElicitationResponse(
        domain=domain,
        question=question,
        answer=answer
    )
    db.add(response)
    db.commit()
    db.refresh(response)
    return response
