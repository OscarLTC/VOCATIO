import { Document } from '@react-pdf/renderer';
import {
  PageOne,
  PageOneProps,
} from '../../../components/pdf/inteligencias-multiples/PageOne';
import { PageTwo } from '../../../components/pdf/inteligencias-multiples/PageTwo';
import { PageThree } from '../../../components/pdf/inteligencias-multiples/PageThree';
import { IntelligencesChartProps } from '../../../components/pdf/inteligencias-multiples/IntelligenceChart';
import { PageFour } from '../../../components/pdf/inteligencias-multiples/PageFour';
import { PageNive } from '../../../components/pdf/inteligencias-multiples/PageNive';

interface PdfDocumentInteligenciasMultiplesProps
  extends PageOneProps,
    IntelligencesChartProps {}

export const PdfDocumentInteligenciasMultiples = (
  props: PdfDocumentInteligenciasMultiplesProps
) => {
  return (
    <Document>
      {/* <PageOne
        person={{
          name: 'John',
          lastName: 'Doe',
        }}
        surveyProgramming={{
          endDate: '2021-10-10',
          section: 'Section 1',
        }}
      />
      <PageTwo />
      <PageThree />
      <PageFour /> */}
      <PageNive />
    </Document>
  );
};
