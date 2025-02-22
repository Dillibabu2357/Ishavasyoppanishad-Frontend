import { Navigate, Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import CreditsPage from "./pages/CreditsPage";
import HelpPage from "./pages/HelpPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import LearnMorePage from "./pages/LearnMorePage";
import TeachMePage from "./pages/TeachMePage";
import ChantPage from "./pages/ChantPage";
import FirstPage from "./pages/FirstPage"; // Ensure the correct import path for FirstPage
import IntroductionPage from "./components/app/IntroductionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/introduction" element={<IntroductionPage/>}/>
      <Route path="/chant" element={<ChantPage />} />
      <Route path="/teach-me" element={<TeachMePage />} />
      <Route path="/learn-more" element={<LearnMorePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/credits" element={<CreditsPage />} />
      <Route path="/disclaimer" element={<DisclaimerPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
