import { Question } from './question.model';

export interface Survey {
  id: number;
  name: string;
  description: string;
  question: Array<Question>;
}
