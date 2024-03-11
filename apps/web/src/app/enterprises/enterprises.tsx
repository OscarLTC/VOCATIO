import { EnterprisesList } from './enterprises-list/EnterprisesList';
import { EnterprisesForm } from './enterprises-form/EnterprisesForm';
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
