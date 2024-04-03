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

interface PdfDocumentArquetiposProps extends PageOneProps {
  resultForSurvey: ResultTypeTwo[];
  maxIndexSurvey: number[];
  imageURL: string;
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
      <PageFour />
      {/* <PageFive/>
      <PageSix/>
      <PageSeven/> */}
      <PageEight />
    </Document>
  );
};
