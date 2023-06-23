import { QuestionAlternative } from './questionAlternative.model';
import { QuestionCategory } from './questionCategory.model';

export interface Question {
  id: string;
  question_alternative: Array<QuestionAlternative>;
  question_category: Array<QuestionCategory>;
}
