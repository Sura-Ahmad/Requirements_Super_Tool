from fastapi import APIRouter, HTTPException
from src.services.domain_service import load_domain_knowledge
from src.services.elicitation_question_service import generate_domain_questions

router = APIRouter(prefix="/domains", tags=["Domains"])

@router.get("/{domain_name}/elicitation-questions")
def get_domain_questions(domain_name: str):
    try:
        domain_knowledge = load_domain_knowledge(domain_name)
        questions = generate_domain_questions(domain_knowledge)
        return {"domain": domain_name, "questions": [
            {
                "id": f"{domain_name}-{i}",   # NEW: id ثابت
                "text": q                     # NEW: نص السؤال
            }
            for i, q in enumerate(questions)
        ]
    }
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
