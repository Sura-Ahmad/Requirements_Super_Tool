import json
from pathlib import Path

BASE_PATH = Path(__file__).resolve().parent.parent
DOMAIN_PATH = BASE_PATH / "knowledge_base" / "domain"

def load_domain_knowledge(domain_name: str) -> dict:
    file_path = DOMAIN_PATH / f"{domain_name}.json"

    if not file_path.exists():
        raise ValueError("Domain not supported")

    with open(file_path, "r", encoding="utf-8") as f:
        return json.load(f)
    

    #_file_ is a special variable that holds the path of the current file
    #resolve (clean the path to make it clearer , sometime it includes extra .. or // )
    #parent.parent goes two levels up from the current file location()knowledgebase-domain two levels
