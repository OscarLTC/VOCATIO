import { Route, Routes } from 'react-router-dom';
import './reports.scss';
import ReportsView from './reports-view/reports-view';

/* eslint-disable-next-line */
export interface ReportsProps {}

export function Reports(props: ReportsProps) {
  return (
    <Routes>
      <Route path="/" element={<ReportsView />} />
      {/* <Route path="/save" element={<PeopleForm formState={1} />} />
      <Route path="/:id" element={<PeopleForm formState={2} />} /> */}
    </Routes>
  );
}

export default Reports;
