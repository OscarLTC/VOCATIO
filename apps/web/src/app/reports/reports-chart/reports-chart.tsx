import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  RadialLinearScale,
  Title,
} from 'chart.js';
import {
  convertAnswersToCounts,
  getGroupsValues,
  getCategoriesValues,
  getMaxIndex,
  getResult,
  getSurveyPersonData,
  getIdsValues,
  getResultArchetype,
  getSkillData,
  getHabitsData,
} from '../../dataAccess/surveyProgramming';
import { surveyProgrammingPerson } from '../../models/surveyProgrammingPerson.model';
import { surveyPersonState } from '../../store/people/surveyPerson';
import { useBoolean, useEffectOnce, useInterval } from 'react-use';
import { environment } from '../../../environments/environment';
import { ResultType } from '../../models/resultType.model';
import { ResultTypeTwo } from '../../models/result.model';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import PdfDocument from '../pdf-document/pdf-document';
import { Bar, Doughnut, Radar } from 'react-chartjs-2';
import { RiLoader2Fill } from 'react-icons/ri';
import { pdf } from '@react-pdf/renderer';
import { useState, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { data } from '../reports-pdf/reports-pdf';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  PointElement,
  Legend,
  ChartDataLabels,
  Filler,
  Title
);

interface ReportsChartProps {
  pdfId?: number;
  surveyId?: number;
}

export const ReportsChart = (props: ReportsChartProps) => {
  const [stylesResult, setStylesResult] = useState<ResultType>();
  const [maxIndexResult, setMaxIndexResult] = useState<number>(0);
  const [maxArchetypoResult, setMaxArchetypoResult] = useState<number[]>();
  const [surveyPersonData, setSurveyPersonData] =
    useState<surveyProgrammingPerson>();
  const [skillsResult, setSkillsResult] = useState<any>(null);
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [isDataChartReady, setIsDataChartReady] = useState(false);
  const [isPdfReady, setIsPdfReady] = useState(false);
  const [resultArchetype, setResultArchetype] = useState();
  const [dataArchetype, setDataArchetype] = useState<number[]>();
  const surveyPerson = useRecoilValue(surveyPersonState);

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
    getSurveyPersonData(surveyPerson.idPdf).then((res) => {
      setIsDataChartReady(false);
      if (res) {
        setSurveyPersonData(res);
        if (res.survey_programming.survey.id === 1) {
          const skillsCount: any = getGroupsValues(res.answers, 3);
          setSkillsResult(skillsCount);
          setIsDataChartReady(true);
        } else if (res.survey_programming.survey.id === 2) {
          const skillsCount = getIdsValues(res.answers, 3, true);
          const resultsIndex = skillsCount.map(
            (skill) => skill[0] as unknown as number
          );
          setDataArchetype(
            getIdsValues(res.answers, 12, false).map((arr) => arr[1])
          );

          getResultArchetype(resultsIndex).then((res) => {
            const categoryIndexMap: any = {};
            resultsIndex.map((categoryId, index) => {
              categoryIndexMap[categoryId] = index;
            });
            const sortedData = res.data
              .map((item: any) => {
                const characteristicsArray = item.characteristics.split('.');
                return {
                  ...item,
                  characteristics: characteristicsArray
                    .map((str: any) => str.trim())
                    .slice(0, 4),
                };
              })
              .sort((a: ResultTypeTwo, b: ResultTypeTwo) => {
                const indexA = categoryIndexMap[a.category_id];
                const indexB = categoryIndexMap[b.category_id];
                return indexA - indexB;
              });
            setResultArchetype(sortedData);
          });
          setIsDataChartReady(true);
        } else if (res.survey_programming.survey.id === 3) {
          const skills: any = getSkillData(res.answers);
          setSkillsResult(skills);
          setIsDataChartReady(true);
        } else if (res.survey_programming.survey.id === 4) {
          const skillsCount: any = getCategoriesValues(res.answers, 3);
          setSkillsResult(skillsCount);
          setIsDataChartReady(true);
        } else if (res.survey_programming.survey.id === 5) {
          const skillsCount: any = getCategoriesValues(res.answers, 3);
          setSkillsResult(skillsCount);
          setIsDataChartReady(true);
        } else if (res.survey_programming.survey.id === 6) {
          const counts = convertAnswersToCounts(res.answers);
          const resultMaxIndex = getMaxIndex(counts) + 1;
          setStylesResult(counts);
          setMaxIndexResult(resultMaxIndex);
          setIsDataChartReady(true);
        } else {
          const habits: any = getHabitsData(res.answers);
          setSkillsResult(habits);
          setIsDataChartReady(true);
        }
      }
    });
  });

  const generate = () => {
    if (isPdfReady) return;

    const chart: any = chartRef.current;

    if (chart && surveyPersonData) {
      const surveyId = surveyPersonData.survey_programming.survey.id;
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
            resultForSurvey={surveyId === 6 ? surveyData.data : resultArchetype}
            surveyId={surveyId}
            maxIndexSurvey={
              surveyId === 6 ? maxIndexResult : maxArchetypoResult
            }
            data={skillsResult}
          />
        );

        const blobToBase64 = (blob: any) => {
          return new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
          });
        };
        const pdfBlob = pdf(pdfDoc).toBlob();
        pdfBlob.then(async (res) => {
          const base64 = await blobToBase64(res);
          axios
            .post(
              `${environment.apiUrl}/surveyProgrammingPerson/pdf/${surveyPerson.idPdf}`,
              base64
            )
            .then((res) => {
              setIsPdfReady(true);
              toggleIsRunning(false);
            });
        });
      });
    }
  };

  return (
    <div className="h-[100vh] w-full bg-[aliceblue] flex">
      {isDataChartReady && (
        <div className="absolute pointer-events-none w-[1000px] invisible">
          {surveyPerson.surveyId == 1 && (
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
          {surveyPerson.surveyId == 2 && dataArchetype && (
            <Radar
              ref={chartRef}
              width={60}
              data={{
                labels: [
                  'Control',
                  'Innovacion',
                  'Servicio',
                  'Conocimiento',
                  'Libertad',
                  'Seguridad',
                  'Intimidad',
                  'Pertenencia',
                  'Diversion',
                  'Poder',
                  'Liberacion y cambio',
                  'Maestria',
                ],
                datasets: [
                  {
                    data: [
                      dataArchetype[0],
                      dataArchetype[1],
                      dataArchetype[2],
                      dataArchetype[9],
                      dataArchetype[10],
                      dataArchetype[11],
                      dataArchetype[3],
                      dataArchetype[4],
                      dataArchetype[5],
                      dataArchetype[8],
                      dataArchetype[7],
                      dataArchetype[6],
                    ],
                    backgroundColor: 'rgba(1, 53, 82, 0.2)',
                    borderColor: 'rgba(1, 53, 82, 1)',
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                animation: {
                  delay: 0,
                  duration: 0,
                  onComplete: generate,
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                  datalabels: {
                    color: 'black',
                    font: {
                      size: 18,
                      weight: 'bold',
                    },
                  },
                },
                scales: {
                  r: {
                    grid: {
                      circular: true,
                    },
                    beginAtZero: true,
                    ticks: {
                      display: false,
                    },
                    pointLabels: {
                      color: 'black',
                      font: {
                        size: 15,
                      },
                    },
                    startAngle: -30,
                  },
                },
              }}
            />
          )}
          {surveyPerson.surveyId == 3 && (
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
              }}
              data={{
                labels: [],
                datasets: [],
              }}
            />
          )}
          {surveyPerson.surveyId == 4 && (
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
          {surveyPerson.surveyId == 5 && (
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
          {surveyPerson.surveyId == 6 && (
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
          {surveyPerson.surveyId == 7 && (
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
              }}
              data={{
                labels: [],
                datasets: [],
              }}
            />
          )}
        </div>
      )}
      {isPdfReady ? (
        <div className="text-center flex mx-auto gap-3 rounded self-center select-none p-4 bg-white w-fit h-fit">
          <h4 className="self-center font-bold">
            Se ha completado correctamente la encuesta <br /> Puede cerrar esta
            página
          </h4>
        </div>
      ) : (
        <div className="text-center flex mx-auto gap-3 rounded self-center select-none p-4 bg-white w-fit h-fit">
          <h4 className="self-center font-bold">Guardando respuestas</h4>
          <RiLoader2Fill className="animate-spin " size={30} />
        </div>
      )}
    </div>
  );
};
