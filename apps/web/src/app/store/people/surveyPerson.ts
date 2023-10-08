import { atom } from 'recoil';

export const surveyPersonState = atom<{
  idPdf: number;
  surveyId: number;
}>({
  key: 'surveyPersonState',
  default: { idPdf: 0, surveyId: 0 },
});
