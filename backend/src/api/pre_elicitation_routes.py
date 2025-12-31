from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from src.database.db import SessionLocal
from src.models.pre_elicitation_response_model import PreElicitationResponseInput
from src.services.pre_elicitation_storage_service import store_response

router = APIRouter(prefix="/pre-elicitation", tags=["Pre-Elicitation"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/response")
def save_response(
    data: PreElicitationResponseInput,
    db: Session = Depends(get_db)
):
    response = store_response(
        db=db,
        domain=data.domain,
        question=data.question,
        answer=data.answer
    )
    return {"status": "saved", "id": response.id}
