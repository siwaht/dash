import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import AIAdvisory from "./components/AIAdvisory";
import AgenticTransformation from "./components/AgenticTransformation";
import Solutions from "./components/Solutions";
import AGUISection from "./components/AGUISection";
import WorkflowSection from "./components/WorkflowSection";
import Industries from "./components/Industries";
import CaseStudies from "./components/CaseStudies";
import DemoForm from "./components/DemoForm";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import StructuredData from "./components/StructuredData";
import { useState } from "react";

function App() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <StructuredData />
        <div className="min-h-screen bg-light-primary dark:bg-dark-primary text-text-light-primary dark:text-text-dark-primary transition-colors">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gradient-brand text-white px-4 py-2 rounded-lg z-50"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" role="main">
            <Hero />
            <HowItWorks />
            <Features />
            <AIAdvisory />
            <AgenticTransformation />
            <Solutions />
            <AGUISection />
            <WorkflowSection />
            <Industries />
            <CaseStudies />
            <DemoForm />
          </main>
          <Footer onOpenPrivacy={() => setShowPrivacyModal(true)} />

          {showPrivacyModal && (
            <PrivacyPolicy onClose={() => setShowPrivacyModal(false)} />
          )}
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
