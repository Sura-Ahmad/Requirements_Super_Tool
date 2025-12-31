import { useNavigate } from "react-router-dom";
import WizardLayout from "../../layouts/WizardLayout";
import DomainCard from "../../components/domain/DomainCard";
import CustomDomainInput from "../../components/domain/CustomDomainInput";
import { getDomainQuestions } from "../../api/domainApi";
import { useState } from "react";

const DomainStep = () => {
  const navigate = useNavigate();
  const [customDomain, setCustomDomain] = useState("");

  const handleSelectDomain = async (domain) => {
    const data = await getDomainQuestions(domain);

    navigate("/questions", {
      state: {
        domain,
        questions: data.questions,
      },
    });
  };

  return (
    <WizardLayout currentStep={0}>
      <h2>Select Your Domain</h2>

      <div style={{ display: "flex", gap: 20 }}>
        <DomainCard title="E-Commerce" onSelect={() => handleSelectDomain("ecommerce")} />
        <DomainCard title="Healthcare" onSelect={() => handleSelectDomain("healthcare")} />
      </div>

      <CustomDomainInput
        value={customDomain}
        onChange={setCustomDomain}
      />
    </WizardLayout>
  );
};

export default DomainStep;
