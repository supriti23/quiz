import {QuestionSet} from '../Questions/Questions.type';

export type GivenAns = {
    pos: number,
    givenAns : any
}

export interface AppState {
  visible: boolean,
  position: number,
  data: QuestionSet[]
  question: string,
  answer: any[],
  optionVisible: boolean,
  selected: {
    selectedA: boolean,
    selectedB: boolean,
    selectedC: boolean,
    selectedD: boolean,
  },
  score: number,
  answeredValue: any,
  allAnswers: GivenAns[],
  submitted: boolean,
}

