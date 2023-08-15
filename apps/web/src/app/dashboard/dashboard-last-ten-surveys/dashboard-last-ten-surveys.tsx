import axios from 'axios';
import { environment } from '../../../environments/environment';
import './dashboard-last-ten-surveys.scss';
import { useRecoilState } from 'recoil';
import { surveysEnterpriseState } from '../../store/surveysEnterprise/surveysEnterprise.atom';
import { useEffect } from 'react';
import { SurveyProgramming } from '../../models/surveyProgramming.model';

/* eslint-disable-next-line */
export interface DashboardLastTenSurveysProps {}

export function DashboardLastTenSurveys(props: DashboardLastTenSurveysProps) {
  const [surveys, setSurveys] = useRecoilState(surveysEnterpriseState);

  const getSurveysProgramming = () => {
    axios.get(`${environment.apiUrl}/surveyProgramming/all`).then((res) => {
      setSurveys(res.data.sort((a: any, b: any) => b.id - a.id));
    });
  };

  useEffect(() => {
    if (!surveys) {
      getSurveysProgramming();
    }
  }, [surveys]);

  return (
    <div className="basis-2/4 bg-[#ffffff] w-full rounded-lg shadow flex flex-col p-2">
      <div className="flex justify-between">
        <h2 className="text-left font-bold">Últimas 10 encuestas</h2>
        <div className="flex gap-7 items-center">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-400">Completa</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-yellow-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-400">
              En proceso
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-red-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-400">Pendiente</span>
          </div>
        </div>
      </div>
      {surveys ? (
        <div className="mt-4 overflow-y-auto snap-y snap-mandatory">
          {surveys.slice(0, 10).map((survey: SurveyProgramming) => (
            <div
              key={survey.id}
              className="flex  justify-between my-1 mr-2 snap-always snap-start"
            >
              <h1
                className="text-sm w-fit h-fit p-1 rounded bg-slate-200"
                key={survey.id}
              >
                {`${survey.survey.name} - ${survey.name}`}
              </h1>
              <div
                className={`${
                  parseInt(
                    (
                      (survey?.survey_programming_person.filter(
                        (a) => a.state?.id === 3
                      ).length /
                        survey.survey_programming_person.length) *
                      100
                    ).toFixed(0)
                  ) == 0
                    ? 'bg-red-500'
                    : parseInt(
                        (
                          (survey?.survey_programming_person.filter(
                            (a) => a.state?.id === 3
                          ).length /
                            survey.survey_programming_person.length) *
                          100
                        ).toFixed(0)
                      ) == 100
                    ? 'bg-green-500'
                    : 'bg-yellow-500'
                } w-7 h-7 rounded-full  text-white text-[12px] flex `}
              ></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 w-full h-full bg-slate-200 animate-pulse rounded "></div>
      )}
    </div>
  );
}

export default DashboardLastTenSurveys;
