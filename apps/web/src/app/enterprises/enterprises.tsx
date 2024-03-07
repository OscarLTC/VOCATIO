import { EnterprisesList } from './enterprises-list/enterprises-list';
import { EnterprisesForm } from './enterprises-form/enterprises-form';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { userState } from '../store/user/user.atom';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';

export const Enterprises = () => {
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
};
