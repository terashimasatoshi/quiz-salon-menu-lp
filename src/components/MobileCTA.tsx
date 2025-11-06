import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

interface MobileCTAProps {
  show: boolean;
  onStartQuiz: () => void;
}

export function MobileCTA({ show, onStartQuiz }: MobileCTAProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white border-t-2 border-stone-200 shadow-2xl md:hidden"
        >
          <Button
            onClick={onStartQuiz}
            className="w-full bg-olive-600 hover:bg-olive-700 text-white rounded-full"
            size="lg"
          >
            診断をはじめる
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
