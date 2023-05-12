import { Enterprise } from './enterprise.model';
import { State } from './state.model';
import { Survey } from './survey.model';
import { SurveyEnterprisePersons } from './surveyEnterprisePersons.model';

export interface SurveyEnterprise {
  id: string;
  name: string;
  section: string;
  startDate: string;
  endDate: string;
  survey: Survey;
  enterprise: Enterprise;
  state: State;
  survey_enterprise_persons: Array<SurveyEnterprisePersons>;
}
