import { Bar, Doughnut } from 'react-chartjs-2';
import { useEffect, useState, useRef, forwardRef } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './reports-chart.scss';
import { ResultType } from '../../models/resultType.model';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
} from 'chart.js';
import { Image, pdf } from '@react-pdf/renderer';
import {
  convertAnswersToCounts,
  getGroupsValues,
  getCategoriesValues,
  getMaxIndex,
  getResult,
  getSurveyPersonData,
} from '../../dataAccess/surveyProgramming';
import PdfDocument from '../pdf-document/pdf-document';
import { set } from 'react-hook-form';
import { surveyProgrammingPerson } from '../../models/surveyProgrammingPerson.model';
import { environment } from '../../../environments/environment';
import { useBoolean, useEffectOnce, useInterval } from 'react-use';
import { RiLoader2Fill } from 'react-icons/ri';
import { Question } from '../../models/question.model';
import { Answer } from '../../models/answer.model';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Legend,
  ChartDataLabels,
  Title,
  Legend
);

export interface ReportsChartProps {
  pdfId: number;
  surveyId: number;
}

export function ReportsChart(props: ReportsChartProps) {
  const [stylesResult, setStylesResult] = useState<ResultType>();
  const [maxIndexResult, setMaxIndexResult] = useState<number>(0);
  const [surveyPersonData, setSurveyPersonData] =
    useState<surveyProgrammingPerson>();
  const [skillsResult, setSkillsResult] = useState();
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [isDataChartReady, setIsDataChartReady] = useState(false);
  const [isPdfReady, setIsPdfReady] = useState(false);

  const chartRef = useRef(null);

  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, toggleIsRunning] = useBoolean(true);

  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? delay : null
  );

  useEffectOnce(() => {
    getSurveyPersonData(props.pdfId).then((res) => {
      if (res) {
        setSurveyPersonData(res);
        if (res.survey_programming.survey.id === 1) {
          const skillsCount: any = getGroupsValues(res.answers, 3);
          setSkillsResult(skillsCount);
          setIsDataChartReady(true);
        } else if (res.survey_programming.survey.id === 2) {
          const skillsCount: any = getCategoriesValues(res.answers, 3);
          setSkillsResult(skillsCount);
          setIsDataChartReady(true);
        } else if (res.survey_programming.survey.id === 3) {
          const skillsCount: any = getCategoriesValues(res.answers, 3);
          setSkillsResult(skillsCount);
          setIsDataChartReady(true);
        } else if (res.survey_programming.survey.id === 4) {
          const skillsCount: any = getCategoriesValues(res.answers, 3);
          setSkillsResult(skillsCount);
          setIsDataChartReady(true);
        } else if (res.survey_programming.survey.id === 6) {
          const counts = convertAnswersToCounts(res.answers);
          const resultMaxIndex = getMaxIndex(counts) + 1;
          setStylesResult(counts);
          setMaxIndexResult(resultMaxIndex);
          setIsDataChartReady(true);
        }
      }
    });
  });

  const generate = () => {
    if (isPdfReady) return;
    const chart: any = chartRef.current;

    if (chart && surveyPersonData) {
      const imageBase64 = chart.toBase64Image();

      setIsDataChartReady(false);

      getResult(maxIndexResult).then((surveyData) => {
        const pdfDoc = (
          <PdfDocument
            endDate={surveyPersonData.endDate}
            answers={surveyPersonData.answers}
            person={surveyPersonData.person}
            surveyProgramming={surveyPersonData.survey_programming}
            imageURL={imageBase64}
            resultForSurvey={surveyData.data}
            surveyId={surveyPersonData.survey_programming.survey.id}
            maxIndexSurvey={maxIndexResult}
          />
        );

        const pdfBlob = pdf(pdfDoc).toBlob();
        pdfBlob.then((res) => {
          const fileURL = URL.createObjectURL(res);
          setPdfUrl(fileURL);
          setIsPdfReady(true);
          toggleIsRunning(false);
        });
      });
    }
  };

  return (
    <>
      {isDataChartReady && (
        <div className="absolute pointer-events-none w-[1000px] invisible">
          {props.surveyId == 1 && (
            <Bar
              ref={chartRef}
              width={60}
              height={'30px'}
              options={{
                animation: {
                  delay: 0,
                  duration: 0,
                  onComplete: generate,
                },
                indexAxis: 'y' as const,
                scales: {
                  x: {
                    beginAtZero: true,
                    ticks: {
                      font: {
                        size: 20,
                      },
                    },
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    ticks: {
                      font: {
                        size: 20,
                      },
                    },
                    grid: {
                      display: false,
                    },
                  },
                },
                elements: {
                  bar: {
                    borderWidth: 3,
                    borderRadius: {
                      bottomRight: 10,
                      topRight: 10,
                    },
                  },
                },
                responsive: true,
                plugins: {
                  datalabels: {
                    display: true,
                    color: '#000',
                    font: {
                      size: 30,
                    },
                  },
                  legend: {
                    position: 'top' as const,
                    labels: {
                      font: {
                        size: 30,
                      },
                    },
                  },
                },
              }}
              data={{
                labels: [
                  skillsResult && skillsResult[0][0],
                  skillsResult && skillsResult[1][0],
                  skillsResult && skillsResult[2][0],
                ],
                datasets: [
                  {
                    label: 'Interes Principal',
                    data: [
                      skillsResult && skillsResult[0][1],
                      skillsResult && skillsResult[1][1],
                      skillsResult && skillsResult[2][1],
                    ],
                    borderColor: '#006699',
                    borderWidth: 3,
                    backgroundColor: ['#23ad8c', 'white', 'white'],
                  },
                ],
              }}
            />
          )}
          {props.surveyId == 2 && (
            <Bar
              ref={chartRef}
              width={60}
              height={'30px'}
              options={{
                animation: {
                  delay: 0,
                  duration: 0,
                  onComplete: generate,
                },
                indexAxis: 'y' as const,
                scales: {
                  x: {
                    beginAtZero: true,
                    ticks: {
                      font: {
                        size: 20,
                      },
                    },
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    ticks: {
                      font: {
                        size: 20,
                      },
                    },
                    grid: {
                      display: false,
                    },
                  },
                },
                elements: {
                  bar: {
                    borderWidth: 3,
                    borderRadius: {
                      bottomRight: 10,
                      topRight: 10,
                    },
                  },
                },
                responsive: true,
                plugins: {
                  datalabels: {
                    display: true,
                    color: '#000',
                    font: {
                      size: 30,
                    },
                  },
                  legend: {
                    position: 'top' as const,
                    labels: {
                      font: {
                        size: 30,
                      },
                    },
                  },
                },
              }}
              data={{
                labels: [
                  skillsResult && skillsResult[0][0],
                  skillsResult && skillsResult[1][0],
                  skillsResult && skillsResult[2][0],
                ],
                datasets: [
                  {
                    label: 'Arquetipo Principal',
                    data: [
                      skillsResult && skillsResult[0][1],
                      skillsResult && skillsResult[1][1],
                      skillsResult && skillsResult[2][1],
                    ],
                    borderColor: '#006699',
                    borderWidth: 3,
                    backgroundColor: ['#23ad8c', 'white', 'white'],
                  },
                ],
              }}
            />
          )}
          {props.surveyId == 3 && (
            <Bar
              ref={chartRef}
              width={60}
              height={'30px'}
              options={{
                animation: {
                  delay: 0,
                  duration: 0,
                  onComplete: generate,
                },
                indexAxis: 'y' as const,
                scales: {
                  x: {
                    beginAtZero: true,
                    ticks: {
                      font: {
                        size: 20,
                      },
                    },
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    ticks: {
                      font: {
                        size: 20,
                      },
                    },
                    grid: {
                      display: false,
                    },
                  },
                },
                elements: {
                  bar: {
                    borderWidth: 3,
                    borderRadius: {
                      bottomRight: 10,
                      topRight: 10,
                    },
                  },
                },
                responsive: true,
                plugins: {
                  datalabels: {
                    display: true,
                    color: '#000',
                    font: {
                      size: 30,
                    },
                  },
                  legend: {
                    position: 'top' as const,
                    labels: {
                      font: {
                        size: 30,
                      },
                    },
                  },
                },
              }}
              data={{
                labels: [
                  skillsResult && skillsResult[0][0],
                  skillsResult && skillsResult[1][0],
                  skillsResult && skillsResult[2][0],
                ],
                datasets: [
                  {
                    label: 'Habilidad Principal',
                    data: [
                      skillsResult && skillsResult[0][1],
                      skillsResult && skillsResult[1][1],
                      skillsResult && skillsResult[2][1],
                    ],
                    borderColor: '#006699',
                    borderWidth: 3,
                    backgroundColor: ['#23ad8c', 'white', 'white'],
                  },
                ],
              }}
            />
          )}
          {props.surveyId == 4 && (
            <Bar
              ref={chartRef}
              width={60}
              height={'30px'}
              options={{
                animation: {
                  delay: 0,
                  duration: 0,
                  onComplete: generate,
                },
                indexAxis: 'y' as const,
                scales: {
                  x: {
                    beginAtZero: true,
                    ticks: {
                      font: {
                        size: 20,
                      },
                    },
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    ticks: {
                      font: {
                        size: 20,
                      },
                    },
                    grid: {
                      display: false,
                    },
                  },
                },
                elements: {
                  bar: {
                    borderWidth: 3,
                    borderRadius: {
                      bottomRight: 10,
                      topRight: 10,
                    },
                  },
                },
                responsive: true,
                plugins: {
                  datalabels: {
                    display: true,
                    color: '#000',
                    font: {
                      size: 30,
                    },
                  },
                  legend: {
                    position: 'top' as const,
                    labels: {
                      font: {
                        size: 30,
                      },
                    },
                  },
                },
              }}
              data={{
                labels: [
                  skillsResult && skillsResult[0][0],
                  skillsResult && skillsResult[1][0],
                  skillsResult && skillsResult[2][0],
                ],
                datasets: [
                  {
                    label: 'Inteligencia Principal',
                    data: [
                      skillsResult && skillsResult[0][1],
                      skillsResult && skillsResult[1][1],
                      skillsResult && skillsResult[2][1],
                    ],
                    borderColor: '#006699',
                    borderWidth: 3,
                    backgroundColor: ['#23ad8c', 'white', 'white'],
                  },
                ],
              }}
            />
          )}
          {props.surveyId == 6 && (
            <Doughnut
              ref={chartRef}
              width={100}
              data={{
                labels: ['Visual', 'Auditivo', 'Kinestésico'],
                datasets: [
                  {
                    data: [
                      stylesResult && stylesResult.visual !== 0
                        ? (
                            (stylesResult.visual /
                              (Object.values(stylesResult) as number[]).reduce(
                                (total, value) => total + value,
                                0
                              )) *
                            100
                          ).toFixed(0)
                        : '',
                      stylesResult && stylesResult.auditivo !== 0
                        ? (
                            (stylesResult.auditivo /
                              (Object.values(stylesResult) as number[]).reduce(
                                (total, value) => total + value,
                                0
                              )) *
                            100
                          ).toFixed(0)
                        : '',
                      stylesResult && stylesResult.kinestesico !== 0
                        ? (
                            (stylesResult.kinestesico /
                              (Object.values(stylesResult) as number[]).reduce(
                                (total, value) => total + value,
                                0
                              )) *
                            100
                          ).toFixed(0)
                        : '',
                    ],
                    backgroundColor: [
                      1 == maxIndexResult ? '#23ad8c' : '#fff',
                      2 == maxIndexResult ? '#23ad8c' : '#fff',
                      3 == maxIndexResult ? '#23ad8c' : '#fff',
                    ],
                    borderColor: ['#006699', '#006699', '#006699'],
                    borderWidth: 3,
                  },
                ],
              }}
              options={{
                animation: {
                  delay: 0,
                  duration: 0,
                  onComplete: generate,
                },
                datasets: {
                  doughnut: {
                    label: 'Doughnut',
                  },
                },
                plugins: {
                  datalabels: {
                    display: true,
                    color: '#000',
                    font: {
                      size: 50,
                    },
                  },
                  legend: {
                    labels: {
                      font: {
                        size: 35,
                      },
                    },
                    position: 'top',
                    display: false,
                  },
                },
              }}
            />
          )}
        </div>
      )}
      {isPdfReady ? (
        <a
          className="text-blue-600 text-sm"
          href={pdfUrl}
          target="_blank"
          download={`${surveyPersonData?.survey_programming.name}-${surveyPersonData?.person.name}_${surveyPersonData?.person.lastName}-${surveyPersonData?.survey_programming.survey.name}`}
          rel="noreferrer"
        >
          {`${environment.surveyDomain}/reportes/pdf/${surveyPersonData?.id}`}
        </a>
      ) : (
        <div className="text-center flex justify-center animate-spin">
          <RiLoader2Fill size={22} />
        </div>
      )}
      {/* <h1>{count}</h1> */}
    </>
  );
}

export default ReportsChart;
