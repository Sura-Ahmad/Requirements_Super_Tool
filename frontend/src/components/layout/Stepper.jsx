import ProgressBar from "../common/ProgressBar";

const steps = ["Domain", "Questions", "Role", "Requirements", "Cross-Check"];

const Stepper = ({ currentStep }) => {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Step {currentStep + 1} of 5</span>
        <span>{(currentStep + 1) * 20}%</span>
      </div>

      <ProgressBar percentage={(currentStep + 1) * 20} />

      <div style={{ display: "flex", gap: 20, marginTop: 15 }}>
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
