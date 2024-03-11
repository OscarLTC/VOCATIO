import { useEffect, useState } from 'react';
import axios from 'axios';
import { environment } from '../../../environments/environment';

interface survey {
  id: number;
  name: string;
  amount: number;
}

export const DashboardSurveyNumber = () => {
  const [surveys, setSurveys] = useState<Array<survey>>();

  useEffect(() => {
    axios
      .get(`${environment.apiUrl}/survey/total`)
      .then((res) =>
        setSurveys(res.data.sort((a: survey, b: survey) => b.amount - a.amount))
      );
  }, []);
  return (
    <div className="basis-1/4 bg-[#ffffff] rounded-lg shadow flex flex-col justify-center p-2">
      <h2 className="text-left font-bold">Número de encuestas</h2>
      <div className="h-full justify-center flex">
        <div className="self-center w-full p-1">
          {surveys ? (
            surveys.map((survey) => (
              <div
                key={survey.id}
                className="text-sm flex m-2 bg-slate-200 rounded"
              >
                <h3 className="self-center p-1 text-left w-full">
                  {survey.name}
                </h3>
                <p
                  className={`w-8 h-8 p-1 text-white rounded ${
                    surveys[0].amount <= survey.amount
                      ? 'bg-green-500'
                      : surveys[6].amount == survey.amount
                      ? 'bg-red-500'
                      : 'bg-yellow-500'
                  }`}
                >
                  {survey.amount}
                </p>
              </div>
            ))
          ) : (
            <div className="h-72 w-full bg-slate-200 p-1 animate-pulse rounded"></div>
          )}
        </div>
      </div>
    </div>
  );
};
