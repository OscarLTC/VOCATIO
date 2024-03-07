import { Route, Routes, useNavigate } from 'react-router-dom';
import { ReportsView } from './reports-view/reports-view';
import { ReportsPdf } from './reports-pdf/reports-pdf';
import { useRecoilValue } from 'recoil';
import { userState } from '../store/user/user.atom';
import { useEffect } from 'react';

export const Reports = () => {
  const user = useRecoilValue(userState);

  const navigate = useNavigate();

  if (!user) navigate('/login');

  useEffect(() => {
    if (!user) navigate('/login');
  }, []);

  return (
    user && (
      <Routes>
        <Route path="/" element={<ReportsView />} />
        <Route path="/pdf/:id" element={<ReportsPdf />} />
      </Routes>
    )
  );
};
