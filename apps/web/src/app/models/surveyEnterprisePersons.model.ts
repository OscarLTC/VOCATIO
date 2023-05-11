import { Person } from './person.model';
import { State } from './state.model';
import { SurveyEnterprise } from './surveyEnterprise.model';

export interface SurveyEnterprisePersons {
  id: string;
  person: Person;
  result: any;
  state: State;
  survey_enterprise: SurveyEnterprise;
}
