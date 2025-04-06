
import { ReactNode } from 'react';

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  colorClass: string;
  timeLimit: number;
  questions: number;
  difficulty?: string;
  practiceModeAvailable: boolean;
}

export interface QuizQuestion {
  question: string;
  code?: string;
  answers: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation?: string;
  hint?: string;
}

export interface Quiz {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  timeLimit: number;
  passingScore: number;
  questions: QuizQuestion[];
}

export interface LeaderboardItem {
  id: string;
  categoryId: string;
  category: string;
  name: string;
  title: string;
  score: number;
  level: string;
  completedDate: string;
}

export interface QuizResultsType {
  score: number;
  totalQuestions: number;
  percentageScore: number;
}
