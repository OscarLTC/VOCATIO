import { Alternative } from './alternative.model';

export interface Answer {
  id: string;
  alternative: Alternative;
  surveyEnterprisePerson_id: number;
}
