import Header from "./Header";
import Stepper from "./Stepper";

const WizardLayout = ({ children, currentStep }) => {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 40 }}>
      <Header />
      <Stepper currentStep={currentStep} />
      {children}
    </div>
  );
};

export default WizardLayout;
