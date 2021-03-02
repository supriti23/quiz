export type QuestionResponse = {
  response_code: number;
  results: Result[];
};

export type Result = {
  category: string;
  correct_answer: string;
  difficulty: Difficulty;
  incorrect_answers: string[];
  question: string;
  type: AnswerType;
};

export enum Difficulty {
  EASY = "easy",
  HARD = "hard",
}

export enum AnswerType {
  MULTIPLE = "multiple",
  BOOLEAN = "boolean",
}

export interface QuestionProps {
  ques: string;
  answers: string[];
  optionVisible: boolean;
  quesNextChange: any;
  quesPrevChange: any;
  position: number;
  selectedAns: any;
  selectedA: boolean;
  selectedB: boolean;
  selectedC: boolean;
  selectedD: boolean;
  answeredValue: any;
  scoreCalc: any;
}

export type QuestionSet = {
  ques: string;
  answers: string[];
  correct: string;
};
