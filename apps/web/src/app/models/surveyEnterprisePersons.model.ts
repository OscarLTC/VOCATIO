import { Answer } from './answer.model';
import { Person } from './person.model';
import { Result } from './result.model';
import { State } from './state.model';
import { SurveyEnterprise } from './surveyEnterprise.model';

export interface SurveyEnterprisePersons {
  id: string;
  answers: Array<Answer>;
  person: Person;
  result: Result;
  state: State;
  end_date: string;
  survey_enterprise: SurveyEnterprise;
}
