import { Document } from '@react-pdf/renderer';
import {
  PageOne,
  PageOneProps,
} from '../../../components/pdf/habitos-de-estudio/PageOne';
import { PageTwo } from '../../../components/pdf/habitos-de-estudio/PageTwo';
import { PageThree } from '../../../components/pdf/habitos-de-estudio/PageThree';
import { PageFive } from '../../../components/pdf/habitos-de-estudio/PageFive';
import { PageFour } from '../../../components/pdf/habitos-de-estudio/PageFour';
import { PageSix } from '../../../components/pdf/habitos-de-estudio/PageSix';
import { HabitsChartProps } from '../../../components/pdf/habitos-de-estudio/HabitsChart';

interface PdfDocumentHabitosDeEstudioProps
  extends PageOneProps,
    HabitsChartProps {}

export const PdfDocumentHabitosDeEstudio = (
  props: PdfDocumentHabitosDeEstudioProps
) => {
  return (
    <Document>
      <PageOne
        person={props.person}
        surveyProgramming={props.surveyProgramming}
      />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive habits={props.habits} />
      <PageSix />
    </Document>
  );
};
