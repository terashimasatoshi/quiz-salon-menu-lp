export interface Menu {
  id: string;
  title: string;
  price_display: string;
  audience: string;
  effects: string[];
  best_for: string[];
  duration_min_est: number;
  duration_max_est: number;
  tags: string[];
  hotpepper_url: string;
}

export interface QuizAnswer {
  questionId: number;
  answer: string | string[];
}

export interface QuizState {
  currentQuestion: number;
  answers: QuizAnswer[];
  isComplete: boolean;
}

export interface MatchedMenu extends Menu {
  score: number;
  reason: string;
}
