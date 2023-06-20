import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import './enterprises.scss';
import EnterprisesList from './enterprises-list/enterprises-list';
import EnterprisesForm from './enterprises-form/enterprises-form';
import { useRecoilValue } from 'recoil';
import { userState } from '../store/user/user.atom';

/* eslint-disable-next-line */
export interface EnterprisesProps {}

export function Enterprises(props: EnterprisesProps) {
  const user = useRecoilValue(userState);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
  }, []);

  return (
    user && (
      <Routes>
        <Route path="/" element={<EnterprisesList />} />
        <Route path="/save" element={<EnterprisesForm formState={1} />} />
        <Route path="/:id" element={<EnterprisesForm formState={2} />} />
      </Routes>
    )
  );
}

export default Enterprises;
