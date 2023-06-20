import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './reports.scss';
import ReportsView from './reports-view/reports-view';
import { PDFViewer } from '@react-pdf/renderer';
import ReportsPdf from './reports-pdf/reports-pdf';
import { useRecoilValue } from 'recoil';
import { userState } from '../store/user/user.atom';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface ReportsProps {}

export function Reports(props: ReportsProps) {
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
}

export default Reports;
