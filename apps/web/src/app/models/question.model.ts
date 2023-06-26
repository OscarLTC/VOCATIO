import { QuestionAlternative } from './questionAlternative.model';
import { QuestionCategory } from './questionCategory.model';

export interface Question {
  id: string;
  description: string;
  question_alternative: Array<QuestionAlternative>;
  question_category: Array<QuestionCategory>;
}
