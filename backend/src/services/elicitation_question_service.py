def generate_domain_questions(domain_knowledge: dict) -> list[str]:
    return domain_knowledge.get("elicitation_questions", [])
