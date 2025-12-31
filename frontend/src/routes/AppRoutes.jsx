import { BrowserRouter, Routes, Route } from "react-router-dom";
import DomainStep from "../pages/steps/DomainStep";
import QuestionsStep from "../pages/steps/QuestionsStep";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DomainStep />} />
        <Route path="/questions" element={<QuestionsStep />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
