import { DashboardLastSurveyDetail } from './dashboard-last-survey-detail/DashboardLastSurveyDetail';
import { DashboardTotalPercentage } from './dashboard-total-percentage/DashboardTotalPercentage';
import { DashboardLastTenSurveys } from './dashboard-last-ten-surveys/DashboardLastTenSurveys';
import { DashboardSurveyNumber } from './dashboard-survey-number/DashboardSurveyNumber';
import { DashboardFiveEnterprises } from './dashboard-five-enterprises/DashboardFiveEnterprises';
import 'react-circular-progressbar/dist/styles.css';

export const Dashboard = () => {
  return (
    <div className="lg:h-[100vh] bg-[aliceblue]">
      <div className="h-full w-full p-10 flex flex-col gap-3  ">
        <div className="w-full  lg:h-3/5  flex max-lg:flex-col gap-3">
          <DashboardLastSurveyDetail />
          <DashboardTotalPercentage />
          <DashboardSurveyNumber />
        </div>
        <div className="w-full flex max-lg:flex-col lg:h-2/5  gap-3">
          <DashboardLastTenSurveys />
          <DashboardFiveEnterprises />
        </div>
      </div>
    </div>
  );
};
