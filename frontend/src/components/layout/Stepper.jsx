import ProgressBar from "../common/ProgressBar";

const steps = ["Domain", "Questions", "Role", "Type/Upload document","Requirements Editble Studio", "Optional Cross-Check", "SRS Document Generator"];

const Stepper = ({ currentStep }) => {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Step {currentStep + 1} of 7</span>
        <span>{(currentStep + 1) * 14.3}%</span>
      </div>

      <ProgressBar percentage={(currentStep + 1) * 14.3} />

      <div style={{ display: "flex", gap: 17, marginTop: 15, flexWrap: "wrap",  }}>
        {steps.map((step, index) => (
          <span
            key={step}
            style={{
              fontWeight: index === currentStep ? "bold" : "normal",
              color: index === currentStep ? "#4f46e5" : "#777",
            }}
          >
            {step}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
