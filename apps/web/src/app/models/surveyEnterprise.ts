import { Enterprise } from './enterprise.model';
import { Person } from './person.model';
import { State } from './state.model';
import { Survey } from './survey.model';
import { SurveyEnterprisePersons } from './surveyEnterprisePersons';

export interface SurveyEnterprise {
  id: string;
  startDate: string;
  endDate: string;
  name: string;
  survey: Survey;
  enterprise: Enterprise;
  state: State;
  survey_enterprise_persons: Array<SurveyEnterprisePersons>;
}
