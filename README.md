Tool name : Requirements Super Tool

Project Description:

-This tool aims to support requirements elicitation and analysis phase by using AI as assistant.
-It mitigates AI hallucination by constraining the AI within predefined domains and  knowledge sources, ensuring that generated outputs remain context-aware and relevant.
-Users can upload external documents, such as surveys or requirement-related documents, which are used as  input to support the process.
-An editable requirements studio allows users to manually refine requirements and an optional cross-checking feature to enhance accuracy.
-At the end, users can export a structured requirements document formatted according to IEEE standards in a Word file.
This tool keeps human-in-the-loop , where AI acts as an assistant instead of a decision-maker.

Implemented Features till now:

- Domain selection with specific questions

Technologies used till now:

- Python
- FastAPI
- SQLite
- SQLAlchemy
- React(vite)
- Swagger
- Selenium
- Git
- Github

How to run project?

First run the backend:
1-	Open VS-code terminal
2-	Write --> git clone https://github.com/Sura-Ahmad/Requirements_Super_Tool.git
3-	Write --> cd backend 
4-	Write --> python -m uvicorn src.main:app --port 8005 (the project runs on this port)

If the port is not available do the following in the terminal to kill the process:
1-	netstat -ano | findstr :8005
2-	taskkill /PID 12345 /F  (replace 12345 with the resulted PID from step1)
3-	run these commands again :

git clone https://github.com/Sura-Ahmad/Requirements_Super_Tool.git
cd backend 
python -m uvicorn src.main:app --port 8005

     Second run the frontend:
1-	Write --> cd front end 
2-	Write --> npm run dev
3-	Copy the local-host url and open it in the browser


Swagger url:
http://127.0.0.1:8005/docs
open Swagger after run backend







"""