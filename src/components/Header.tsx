import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  onStartQuiz: () => void;
}

export function Header({ onStartQuiz }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-olive-600" />
          <span className="font-medium text-stone-800">HAIR&MAKE peace</span>
        </div>
        
        <Button 
          onClick={onStartQuiz}
          className="bg-olive-600 hover:bg-olive-700 text-white rounded-full"
          data-event="click_header_cta"
        >
          診断をはじめる
        </Button>
      </div>
    </header>
  );
}
