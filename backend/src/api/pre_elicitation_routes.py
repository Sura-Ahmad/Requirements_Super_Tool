from fastapi import APIRouter, Depends, HTTPException  
from sqlalchemy.orm import Session
from src.database.db import SessionLocal
from src.models.pre_elicitation_response_model import PreElicitationResponseInput
from src.services.pre_elicitation_storage_service import store_response
from src.services.domain_service import load_domain_knowledge  

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
   
    try:
        load_domain_knowledge(data.domain)
    except Exception:
        raise HTTPException(
            status_code=404,
            detail=f"Domain '{data.domain}' not found"
        )

 
    response = store_response(
        db=db,
        domain=data.domain,
        question=data.question,
        answer=data.answer
    )

    return {
        "status": "saved",
        "id": response.id
    }
