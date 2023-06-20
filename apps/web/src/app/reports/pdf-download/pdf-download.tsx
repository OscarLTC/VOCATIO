import { pdf } from '@react-pdf/renderer';
import ReactDOMServer from 'react-dom/server';
// import styles from './pdf-download.module.scss';
import { useEffect } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
} from 'chart.js';
import {
  convertAnswersToCounts,
  getMaxIndex,
  getResult,
  getSurveyPersonData,
} from '../../dataAccess/surveyProgramming';
import PdfDocument from '../pdf-document/pdf-document';
import ReportsChart from '../reports-chart/reports-chart';
import { blob } from 'stream/consumers';
import { promise, promiseChart } from '../reports-chart/reports-chart.helper';

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

/* eslint-disable-next-line */
export interface PdfDownloadProps {
  idPDF: number;
}

export function PdfDownload(props: PdfDownloadProps) {
  useEffect(() => {}, []);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <></>
  );
}

export default PdfDownload;
