import './reports-pdf.scss';
import { useEffect, useState, useRef } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  Link,
  PDFViewer,
} from '@react-pdf/renderer';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { useParams } from 'react-router-dom';
import { surveyProgrammingPerson } from '../../models/surveyProgrammingPerson.model';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
} from 'chart.js';
import { Answer } from '../../models/answer.model';
import { Result } from '../../models/result.model';
import { ResultType } from '../../models/resultType.model';
import PdfDocument from '../pdf-document/pdf-document';

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

Font.register({
  family: 'Montserrat',
  fonts: [
    { src: '/fonts/montserrat/Montserrat-Bold.ttf', fontWeight: 'bold' },
    {
      src: '/fonts/montserrat/Montserrat-BoldItalic.ttf',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    { src: '/fonts/montserrat/Montserrat-Italic.ttf', fontStyle: 'italic' },
    { src: '/fonts/montserrat/Montserrat-Light.ttf', fontWeight: 300 },
    {
      src: '/fonts/montserrat/Montserrat-LightItalic.ttf',
      fontWeight: 300,
      fontStyle: 'italic',
    },
    { src: '/fonts/montserrat/Montserrat-Medium.ttf', fontWeight: 500 },
    {
      src: '/fonts/montserrat/Montserrat-MediumItalic.ttf',
      fontWeight: 500,
      fontStyle: 'italic',
    },
    { src: '/fonts/montserrat/Montserrat-Regular.ttf', fontWeight: 'normal' },
    { src: '/fonts/montserrat/Montserrat-SemiBold.ttf', fontWeight: 600 },
    {
      src: '/fonts/montserrat/Montserrat-SemiBoldItalic.ttf',
      fontWeight: 600,
      fontStyle: 'italic',
    },
    { src: '/fonts/montserrat/Montserrat-Thin.ttf', fontWeight: 100 },
    {
      src: '/fonts/montserrat/Montserrat-ThinItalic.ttf',
      fontWeight: 100,
      fontStyle: 'italic',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 6,
    paddingHorizontal: 10,
    fontFamily: 'Montserrat',
  },
  pageHeader: {
    fontSize: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerLeft: {
    fontWeight: 'bold',
  },
  headerRight: {
    fontWeight: 'normal',
  },
  content: {
    paddingHorizontal: '20px',
  },

  image: {
    width: '60px',
    marginTop: '40px',
    marginLeft: 'auto',
  },

  hero: {
    width: '100%',
  },

  title: {
    color: '#006699',
    fontWeight: 'bold',
  },

  subtitle: {
    marginTop: '20px',
    color: '#006699',
    fontWeight: 'bold',
    fontSize: '15px',
  },

  subhero: {
    width: '330px',
    marginTop: '5px',
    fontSize: '11px',
    backgroundColor: '#006699',
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  maindata: {
    marginTop: '20px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  surveydata: {
    marginTop: '5px',
    fontSize: '12px',
  },
  chart: {
    width: '100%',
    height: '100%',
  },
});

/* eslint-disable-next-line */
export interface ReportsPdfProps {
  idPDF?: string;
}

export function ReportsPdf(props: ReportsPdfProps) {
  const [surveyPerson, setSurveyPerson] = useState<surveyProgrammingPerson>();
  const [stylesResult, setStylesResult] = useState<ResultType>();
  const [resultData, setResultData] = useState<any>();
  const [maxIndexResult, setMaxIndexResult] = useState<any>();
  const [skillsResult, setSkillsResult] = useState<any>();
  const [isReady, setIsReady] = useState<boolean>(false);

  const countValues: { [key: string]: number } = {
    visual: 0,
    auditivo: 0,
    kinestesico: 0,
  };

  const { id } = useParams();

  const chartRef = useRef(null);
  const [imageURL, setImageURL] = useState('');

  const generate = () => {
    const chart: any = chartRef.current;

    if (chart) {
      const imageBase64 = chart.toBase64Image();
      setImageURL(imageBase64);
    }
  };

  const getCategoriesValues = (datos: any) => {
    const sumaCategorias: any = {};

    for (const dato of datos) {
      const categoria = dato.question_category.category.name;
      const valor: number = parseInt(dato.question_alternative.value);

      if (sumaCategorias[categoria]) {
        sumaCategorias[categoria] += valor;
      } else {
        sumaCategorias[categoria] = valor;
      }
    }

    return sumaCategorias;
  };

  useEffect(() => {
    const getSurveyPersonData = async () => {
      await axios
        .get(
          `${environment.apiUrl}/surveyProgrammingPerson/${
            id ? id : props.idPDF
          }`
        )
        .then((res) => {
          const counts = res.data.answers?.reduce(
            (count: { [key: string]: number }, item: any) => {
              const value = item.question_alternative.value;
              if (value == 1) {
                count['visual'] = (count['visual'] || 0) + 1;
              } else if (value == 2) {
                count['auditivo'] = (count['auditivo'] || 0) + 1;
              } else if (value == 3) {
                count['kinestesico'] = (count['kinestesico'] || 0) + 1;
              }
              return count;
            },
            countValues
          );

          res.data.survey_programming.survey.id === 3 &&
            setSkillsResult(
              Object.entries(getCategoriesValues(res.data.answers))
                .sort((a: any, b: any) => b[1] - a[1])
                .slice(0, 3)
            );

          res.data.survey_programming.survey.id === 6 && console.log(counts);
          setStylesResult(counts);

          const values = Object.values(counts) as number[];
          const maxIndex = values.indexOf(Math.max(...values));
          setSurveyPerson(res.data);
          setMaxIndexResult(maxIndex + 1);

          res.data.survey_programming.survey.id === 6 &&
            axios
              .get(`${environment.apiUrl}/result/${maxIndex + 1}`)
              .then((res) => {
                setResultData(res.data);
              });
        });
      setIsReady(true);
    };
    getSurveyPersonData();
  }, []);

  return (
    <>
      {surveyPerson && (
        <PDFViewer className="h-[100vh]">
          <PdfDocument
            answers={surveyPerson.answers}
            endDate={surveyPerson?.endDate}
            imageURL={imageURL}
            person={surveyPerson.person}
            resultForSurvey={resultData}
            surveyId={surveyPerson.survey_programming.survey.id}
            surveyProgramming={surveyPerson.survey_programming}
            maxIndexSurvey={maxIndexResult}
          />
        </PDFViewer>
      )}
      {surveyPerson?.survey_programming.survey.id === 6 && (
        <Doughnut
          className="absolute invisible"
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
                  1 == resultData?.id ? '#23ad8c' : '#fff',
                  2 == resultData?.id ? '#23ad8c' : '#fff',
                  3 == resultData?.id ? '#23ad8c' : '#fff',
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
      {surveyPerson?.survey_programming.survey.id === 3 && (
        <Bar
          ref={chartRef}
          width={20}
          height={'10px'}
          className="absolute invisible"
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
                    size: 40,
                  },
                },
              },
              y: {
                ticks: {
                  font: {
                    size: 40,
                  },
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
                    size: 40,
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
    </>
  );
}

export default ReportsPdf;
