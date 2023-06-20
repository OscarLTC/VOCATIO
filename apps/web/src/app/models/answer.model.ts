import { Alternative } from './alternative.model';
import { QuestionAlternative } from './questionAlternative.model';
import { QuestionCategory } from './questionCategory.model';

export interface Answer {
  id: number;
  question_alternative: QuestionAlternative;
  question_category: QuestionCategory;
  surveyEnterprisePerson_id: number;
}
