import { useState } from "react";
import WizardLayout from "../../components/layout/WizardLayout";
import { useLocation, useNavigate } from "react-router-dom";

const QuestionsStep = () => {
  const { state } = useLocation();  // data from previous page
  const navigate = useNavigate();   // to navigate between pages

  if (!state) return <p>No questions loaded, start from page1 and select domain first</p>;

  const { domain, questions } = state; // get domain and questions from state

  const [answers, setAnswers] = useState({});  // to store user answers
  /*
  const handleSkip = () => {
    navigate("/role", {
      state: {                    role page not implemented yet to navigate to 
        domain,
        skippedQuestions: true,
      },
    });
  };
 */
  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async () => {
    console.log("Submit clicked");

    for (const question of questions) {
      await fetch("http://127.0.0.1:8005/pre-elicitation/response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({        // translate object to JSON string and send to backend(backend know string not object)
          domain: domain,
          question: question,
          answer: answers[question] || "",
        }),
      });
    }

    alert("Answers saved successfully");
  };

  return (
    <WizardLayout currentStep={1}>
      <h2>{domain} – questions</h2>

      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: 20 }}>
          <p>{q.text}</p>
          <input
            id={`answer-${q.id}`}
            data-testid={`answer-${q.id}`}
            style={{ width: "100%", padding: 10 }}
            placeholder="Your answer (optional)"
            value={answers[q.id] || ""}
            onChange={(e) =>
              setAnswers({ ...answers, [q.id]: e.target.value })
            }
          />
        </div>
      ))}

      <button
        id="back-btn"                 
        data-testid="back-btn" 
        type="button"
        onClick={handleBack}
        style={{
          marginTop: 30,
          padding: "12px 24px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Back
      </button>

      <button
        id="submit-btn"                
        data-testid="submit-btn"
        type="button"
        onClick={handleSubmit}
        style={{
          marginTop: 30,
          marginLeft: 20,
          padding: "12px 24px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Submit
      </button>

      <button
        id="skip-btn"                   
        data-testid="skip-btn" 
        type="button"
        // onClick={handleSkip} (Role page not implemented yet)
        style={{
          marginTop: 30,
          padding: "12px 24px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          marginLeft: 20,
        }}
      >
        Skip
      </button>

    </WizardLayout>
  );
};

export default QuestionsStep;
