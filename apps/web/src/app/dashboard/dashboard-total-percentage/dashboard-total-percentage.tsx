import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ChangingProgressProvider from '../../utils/changingProgressProvider';
import './dashboard-total-percentage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { environment } from '../../../environments/environment';

/* eslint-disable-next-line */
export interface DashboardTotalPercentageProps {}

export function DashboardTotalPercentage(props: DashboardTotalPercentageProps) {
  const [totalSurveysData, setTotalSurveysData] = useState<{
    total: number;
    answered: number;
  }>();

  const [totalPercentage, setTotalPercentage] = useState(0);
  const [arrayNumbers, setArrayNumbers] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`${environment.apiUrl}/surveyProgrammingPerson/totalSurveys`)
      .then((res) => {
        setTotalSurveysData(res.data);

        const percentage = (res.data.answered * 100) / res.data.total;
        setTotalPercentage(percentage);

        const updatedArrayNumbers = [];

        for (let i = 0; i < percentage; i++) {
          updatedArrayNumbers.push(i);
        }
        console.log(updatedArrayNumbers);
        setArrayNumbers(updatedArrayNumbers);
      });
  }, []);

  console.log(arrayNumbers);

  return (
    <div className="basis-2/4 bg-[#ffffff] rounded-lg shadow flex flex-col p-2">
      <h2 className="text-left font-bold">Porcentaje de respuestas</h2>

      {totalSurveysData && arrayNumbers ? (
        <div className=" justify-center flex flex-col">
          <div className="cover pt-10 flex  mx-auto">
            <ChangingProgressProvider interval={40} values={arrayNumbers}>
              {(value) => {
                return (
                  <div className="h-60 w-70 p-2">
                    <CircularProgressbar
                      value={value}
                      text={`${value}%`}
                      circleRatio={0.5}
                      strokeWidth={10}
                      styles={buildStyles({
                        rotation: 0.75,
                        trailColor: '#cbe4fe',
                        pathColor: '#044b97',
                        textColor: '#044b97',
                      })}
                    />
                  </div>
                );
              }}
            </ChangingProgressProvider>
          </div>
          <div className="flex justify-around">
            <div className="flex gap-2 items-center">
              <div className="h-5 w-5 bg-[#044b97] rounded"></div>
              <span>Encuestas completadas: </span>
              <span className="text-2xl font-bold text-[#044b97]">{`${totalSurveysData?.answered}`}</span>
            </div>
            <div className="flex gap-2 items-center ">
              <div className="h-5 w-5 bg-[#cbe4fe] rounded"></div>
              <span>Encuestas totales: </span>
              <span className="text-2xl font-bold text-[#cbe4fe]">{`${totalSurveysData?.total}`}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className=" justify-center flex flex-col p-2 m-10 bg-slate-200 animate-pulse h-full"></div>
      )}
    </div>
  );
}

export default DashboardTotalPercentage;
