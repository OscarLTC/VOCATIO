import { Enterprise } from './enterprise.model';
import { State } from './state.model';
import { Survey } from './survey.model';
import { surveyProgrammingPerson } from './surveyProgrammingPerson.model';

export interface SurveyProgramming {
  id: number;
  name: string;
  section: string;
  startDate: string;
  endDate: string;
  survey: Survey;
  enterprise: Enterprise;
  state: State;
  state_id?: number;
  survey_programming_person: Array<surveyProgrammingPerson>;
}
