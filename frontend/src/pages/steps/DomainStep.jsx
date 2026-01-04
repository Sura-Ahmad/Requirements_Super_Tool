import { useNavigate } from "react-router-dom";
import WizardLayout from "../../components/layout/WizardLayout";
import DomainCard from "../../components/layout/DomainCard";
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

      <div style={{ display: "flex",flexWrap: "wrap", gap: 20 }}>
        <DomainCard title="Healthcare" onSelect={() => handleSelectDomain("healthcare")} />
        <DomainCard title="E-Commerce" onSelect={() => handleSelectDomain("ecommerce")} />  
        <DomainCard title="Education" onSelect={() => handleSelectDomain("Education")} />
        <DomainCard title="Tourism" onSelect={() => handleSelectDomain("Tourism")} />
        <DomainCard title="Technology" onSelect={() => handleSelectDomain("Technology")} />
        <DomainCard title="Transportation" onSelect={() => handleSelectDomain("Transportation")} />
      </div>
    </WizardLayout>
  );
};

export default DomainStep;



