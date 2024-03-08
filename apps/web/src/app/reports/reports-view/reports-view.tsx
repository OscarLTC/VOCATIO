import { ReportsList } from '../../components/reports/ReportList';
import { ReportForm } from '../../components/reports/ReportForm';

export const ReportsView = () => {
  return (
    <div className="sm:my-8 bg-[aliceblue]">
      <h1 className="sm:text-4xl text-2xl px-4 text-left ">Reportes</h1>
      <div className="p-4 mt-5 text-sm">
        <ReportForm />
        <ReportsList />
      </div>
    </div>
  );
};
