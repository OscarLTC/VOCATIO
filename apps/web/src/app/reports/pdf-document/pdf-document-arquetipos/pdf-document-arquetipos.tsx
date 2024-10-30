import { Document } from '@react-pdf/renderer';
import { ResultTypeTwo } from '../../../models/result.model';
import {
  PageOne,
  PageOneProps,
} from '../../../components/pdf/arquetipos/PageOne';
import { PageTwo } from '../../../components/pdf/arquetipos/PageTwo';
import { PageThree } from '../../../components/pdf/arquetipos/PageThree';
import { PageFour } from '../../../components/pdf/arquetipos/PageFour';
import { PageFive } from '../../../components/pdf/arquetipos/PageFive';
import { PageSix } from '../../../components/pdf/arquetipos/PageSix';
import { PageSeven } from '../../../components/pdf/arquetipos/PageSeven';
import { PageEight } from '../../../components/pdf/arquetipos/PageEight';
import { ArchetypesChartProps } from '../../../components/pdf/arquetipos/ArchetypesChart';

interface PdfDocumentArquetiposProps extends PageOneProps {
  resultForSurvey: ResultTypeTwo[];
  arquetypesData: ArchetypesChartProps;
}

export const PdfDocumentArquetipos = (props: PdfDocumentArquetiposProps) => {
  return (
    <Document>
      <PageOne
        person={props.person}
        surveyProgramming={props.surveyProgramming}
      />
      <PageTwo />
      <PageThree />
      <PageFour archetypesData={props.arquetypesData.archetypesData} />
      <PageFive resultForSurvey={props.resultForSurvey[0]} />
      <PageSix resultForSurvey={props.resultForSurvey[1]} />
      <PageSeven resultForSurvey={props.resultForSurvey[2]} />
      <PageEight />
    </Document>
  );
};
