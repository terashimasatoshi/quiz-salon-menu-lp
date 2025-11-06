import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Card } from "./ui/card";
import { Check } from "lucide-react";
import { questions } from "../data/questions";
import { QuizAnswer } from "../types/quiz";

interface QuizProps {
  onComplete: (answers: QuizAnswer[]) => void;
  onBack: () => void;
}

export function Quiz({ onComplete, onBack }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestion === questions.length - 1;

  useEffect(() => {
    // Load existing answer for this question
    const existingAnswer = answers.find((a) => a.questionId === question.id);
    if (existingAnswer) {
      setSelectedOptions(
        Array.isArray(existingAnswer.answer)
          ? existingAnswer.answer
          : [existingAnswer.answer]
      );
    } else {
      setSelectedOptions([]);
    }
  }, [currentQuestion, question.id, answers]);

  const handleOptionClick = (value: string) => {
    if (question.type === "multiple") {
      setSelectedOptions((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value]
      );
    } else {
      setSelectedOptions([value]);
    }
  };

  const handleNext = () => {
    // Save answer
    const answer: QuizAnswer = {
      questionId: question.id,
      answer: question.type === "multiple" ? selectedOptions : selectedOptions[0]
    };

    const newAnswers = answers.filter((a) => a.questionId !== question.id);
    newAnswers.push(answer);
    setAnswers(newAnswers);

    // Track event
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("quiz_question_answered", {
          detail: { question: currentQuestion + 1, answer }
        })
      );
    }

    if (isLastQuestion) {
      // Complete quiz with confetti
      setShowConfetti(true);
      setTimeout(() => {
        onComplete(newAnswers);
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("quiz_completed"));
        }
      }, 1000);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    } else {
      onBack();
    }
  };

  const canProceed = selectedOptions.length > 0;

  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-stone-600">
              質問 {currentQuestion + 1} / {questions.length}
            </span>
            <span className="text-sm text-stone-600">
              あと{questions.length - currentQuestion}問
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-8 text-center">
              <h2 className="text-stone-900 mb-2">{question.question}</h2>
              <p className="text-stone-500">{question.subtitle}</p>
            </div>

            {/* Options */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {question.options.map((option, index) => {
                const isSelected = selectedOptions.includes(option.value);
                
                return (
                  <motion.div
                    key={option.value}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      className={`p-6 cursor-pointer transition-all border-2 ${
                        isSelected
                          ? "border-olive-600 bg-olive-50 shadow-lg"
                          : "border-stone-200 hover:border-stone-300 hover:shadow-md"
                      }`}
                      onClick={() => handleOptionClick(option.value)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{option.icon}</div>
                        <div className="flex-1">
                          <p className={`${isSelected ? "text-olive-900" : "text-stone-700"}`}>
                            {option.label}
                          </p>
                        </div>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 rounded-full bg-olive-600 flex items-center justify-center"
                          >
                            <Check className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                className="rounded-full"
              >
                戻る
              </Button>
              <Button
                onClick={handleNext}
                disabled={!canProceed}
                className="flex-1 bg-olive-600 hover:bg-olive-700 text-white rounded-full"
              >
                {isLastQuestion ? "結果を見る" : "次へ"}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Confetti effect */}
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 pointer-events-none z-50"
          >
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -20,
                  rotate: 0
                }}
                animate={{
                  y: window.innerHeight + 20,
                  rotate: 360 * (Math.random() > 0.5 ? 1 : -1)
                }}
                transition={{
                  duration: 2 + Math.random(),
                  ease: "linear"
                }}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: [
                    "#86A789",
                    "#D4A574",
                    "#F3D7CA",
                    "#E8C5A5"
                  ][Math.floor(Math.random() * 4)]
                }}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
