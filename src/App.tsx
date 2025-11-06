import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Quiz } from "./components/Quiz";
import { Results } from "./components/Results";
import { BrandSection } from "./components/BrandSection";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { MobileCTA } from "./components/MobileCTA";
import { Toaster } from "./components/ui/sonner";
import { QuizAnswer, MatchedMenu } from "./types/quiz";
import { matchMenus } from "./utils/matching";

type AppState = "hero" | "quiz" | "results" | "content";

export default function App() {
  const [appState, setAppState] = useState<AppState>("hero");
  const [results, setResults] = useState<MatchedMenu[]>([]);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (appState === "hero" || appState === "content") {
        setShowMobileCTA(window.scrollY > 300);
      } else {
        setShowMobileCTA(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [appState]);

  const handleStartQuiz = () => {
    setAppState("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuizComplete = (answers: QuizAnswer[]) => {
    const matched = matchMenus(answers);
    setResults(matched);
    setAppState("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRetryQuiz = () => {
    setAppState("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHero = () => {
    setAppState("hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToContent = () => {
    setAppState("content");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onStartQuiz={handleStartQuiz} />
      
      {appState === "hero" && (
        <>
          <Hero onStartQuiz={handleStartQuiz} />
          <BrandSection />
          <FAQ />
          <Footer onStartQuiz={handleStartQuiz} />
        </>
      )}

      {appState === "quiz" && (
        <Quiz onComplete={handleQuizComplete} onBack={handleBackToHero} />
      )}

      {appState === "results" && (
        <>
          <Results
            results={results}
            onRetry={handleRetryQuiz}
            onBackToTop={handleBackToContent}
          />
          <BrandSection />
          <FAQ />
          <Footer onStartQuiz={handleStartQuiz} />
        </>
      )}

      {appState === "content" && (
        <>
          <Hero onStartQuiz={handleStartQuiz} />
          <BrandSection />
          <FAQ />
          <Footer onStartQuiz={handleStartQuiz} />
        </>
      )}

      <MobileCTA show={showMobileCTA} onStartQuiz={handleStartQuiz} />
      <Toaster position="top-center" />
    </div>
  );
}
