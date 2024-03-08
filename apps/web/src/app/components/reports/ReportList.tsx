import { ReportTotalInfo } from './ReportTotalInfo';
import { ReportTable } from './ReportTable';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { surveyProgrammingState } from '../../store/surveyProgramming/surveyProgramming.atom';

export const ReportsList = () => {
  const surveysData = useRecoilValue(surveyProgrammingState);

  const [searchText, setSearchText] = useState('');

  return (
    surveysData && (
      <div className="mt-10 ">
        <div className="text-left sm:flex">
          <input
            type="text"
            placeholder="Nombre / Apellido"
            className="my-4 w-80 bg-gray-200 ring-1 ring-black p-2 rounded outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <ReportTotalInfo surveysData={surveysData} />
        </div>
        <ReportTable searchText={searchText} surveysData={surveysData} />
      </div>
    )
  );
};
