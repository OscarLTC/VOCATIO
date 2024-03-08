import { atom } from 'recoil';
import { SurveyProgramming } from '../../models/surveyProgramming.model';

export const surveyProgrammingState = atom<SurveyProgramming | null>({
  key: 'surveyProgrammingState',
  default: null,
});
