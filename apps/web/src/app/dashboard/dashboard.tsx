import { useEffect, useState } from 'react';
import ChangingProgressProvider from '../utils/changingProgressProvider';
import DashboardLastSurveyDetail from './dashboard-last-survey-detail/dashboard-last-survey-detail';
import './dashboard.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import DashboardTotalPercentage from './dashboard-total-percentage/dashboard-total-percentage';
import DashboardLastTenSurveys from './dashboard-last-ten-surveys/dashboard-last-ten-surveys';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    <div className="h-[100vh]">
      <div className="h-full w-full p-10 flex flex-col gap-3  ">
        <div className="w-full  h-3/5  flex gap-3">
          <DashboardLastSurveyDetail />
          <DashboardTotalPercentage />
          <div className="basis-1/4 bg-[#ffffff] rounded-lg shadow">3</div>
        </div>
        <div className="w-full flex h-2/5  gap-3">
          <DashboardLastTenSurveys />
          <div className="basis-1/2 bg-[#ffffff] rounded-lg shadow">5</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
