import { useState } from "react";
import WizardLayout from "../../layouts/WizardLayout";
import { useLocation, useNavigate } from "react-router-dom";

  const QuestionsStep = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No questions loaded</p>;

  const { domain, questions } = state;

  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});

    const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async () => {
    console.log("SUBMIT CLICKED");

    for (const question of questions) {
      await fetch("http://127.0.0.1:8005/pre-elicitation/response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
      <h2>{domain} – Questions</h2>

      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: 20 }}>
          <p>{q}</p>
          <input
            style={{ width: "100%", padding: 10 }}
            placeholder="Your answer (optional)"
            value={answers[q] || ""}
            onChange={(e) =>
              setAnswers({ ...answers, [q]: e.target.value })
            }
          />
        </div>
      ))}

      <button
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
      
    </WizardLayout>
  );
};

export default QuestionsStep;
