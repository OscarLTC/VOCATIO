import { Route, Routes } from 'react-router-dom';
import './enterprises.scss';
import EnterprisesList from './enterprises-list/enterprises-list';
import EnterprisesForm from './enterprises-form/enterprises-form';

/* eslint-disable-next-line */
export interface EnterprisesProps {}

export function Enterprises(props: EnterprisesProps) {
  return (
    <Routes>
      <Route path="/" element={<EnterprisesList />} />
      <Route path="/save" element={<EnterprisesForm formState={1} />} />
      <Route path="/:id" element={<EnterprisesForm formState={2} />} />
    </Routes>
  );
}

export default Enterprises;
