import { useEffect, useState } from 'react';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { surveyProgrammingPerson } from '../../models/surveyProgrammingPerson.model';

export const DashboardLastSurveyDetail = () => {
  const [lastSurveyData, setLastSurveyData] =
    useState<surveyProgrammingPerson>();

  useEffect(() => {
    axios
      .get(`${environment.apiUrl}/answers/last`)
      .then((res) => setLastSurveyData(res.data.survey_programming_person));
  }, []);

  return (
    <div className="basis-1/4 bg-[#ffffff] rounded-lg shadow flex flex-col justify-center p-2">
      <h2 className="text-left font-bold">Detalle de la última encuesta</h2>
      <div className="h-full justify-center flex">
        <div className="self-center w-full p-1">
          {lastSurveyData ? (
            <div className="flex gap-3 flex-col text-start">
              <div className="flex rounded bg-slate-50 p-1">
                <h3 className="w-fit h-fit px-2 rounded bg-[#feddda] text-[#9f3029]">
                  Nombre:
                </h3>
                <p className="w-full px-2 text-end text-[#9f3029]">{`${lastSurveyData?.person?.name} ${lastSurveyData?.person?.lastName}`}</p>
              </div>
              <div className="flex rounded bg-slate-50 p-1">
                <h3 className="w-fit h-fit px-2 rounded bg-[#cbe4fe] text-[#044b97]">
                  Empresa:
                </h3>
                <p className="w-full px-2 text-end text-[#044b97]">{`${lastSurveyData?.survey_programming.enterprise.name}`}</p>
              </div>
              <div className="flex rounded bg-slate-50 p-1">
                <h3 className="w-fit h-fit px-2 rounded bg-[#ffebcb] text-[#7c4d04]">
                  Sección:
                </h3>
                <p className="w-full px-2 text-end text-[#7c4d04]">{`${lastSurveyData?.survey_programming.section}`}</p>
              </div>
              <div className="flex rounded bg-slate-50 p-1">
                <h3 className="w-fit h-fit px-2 rounded bg-[#efdafa] text-[#56266f]">
                  Encuesta:
                </h3>
                <p className="w-full px-2 text-end text-[#56266f]">
                  {`${lastSurveyData?.survey_programming.survey.name}`}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex gap-3 flex-col text-start">
              <div className="flex rounded bg-slate-200 p-1 h-8 animate-pulse"></div>
              <div className="flex rounded bg-slate-200 p-1 h-8 animate-pulse"></div>
              <div className="flex rounded bg-slate-200 p-1 h-8 animate-pulse"></div>
              <div className="flex rounded bg-slate-200 p-1 h-8 animate-pulse"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
