import { Route, Routes } from 'react-router-dom';
import './surveys.scss';
import SurveysList from './surveys-list/surveys-list';
import SurveysForm from './surveys-form/surveys-form';
import SurveysDetail from './surveys-detail/surveys-detail';

/* eslint-disable-next-line */
export interface SurveysProps {}

export function Surveys(props: SurveysProps) {
  return (
    <Routes>
      <Route path="/" element={<SurveysList />} />
      <Route path="/save" element={<SurveysForm formState={1} />} />
      <Route path="/:id" element={<SurveysForm formState={2} />} />
      <Route path="/detalle/:id" element={<SurveysDetail />} />
    </Routes>
  );
}

export default Surveys;
