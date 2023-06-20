import { Answer } from './answer.model';
import { Person } from './person.model';
import { State } from './state.model';
import { Survey } from './survey.model';
import { SurveyProgramming } from './surveyProgramming.model';

export interface surveyProgrammingPerson {
  id: number;
  survey_programming: SurveyProgramming;
  person: Person;
  state: State;
  endDate: string;
  state_id?: number;
  answers: Array<Answer>;
}
