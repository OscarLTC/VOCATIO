import { Document } from '@react-pdf/renderer';
import {
  PageOne,
  PageOneProps,
} from '../../../components/pdf/interes-vocacional/PageOne';
import { PageTwo } from '../../../components/pdf/interes-vocacional/PageTwo';
import { PageThree } from '../../../components/pdf/interes-vocacional/PageThree';
import { PageFour } from '../../../components/pdf/interes-vocacional/PageFour';
import { PageNine } from '../../../components/pdf/interes-vocacional/PageNine';
import {
  PageFive,
  interests,
} from '../../../components/pdf/interes-vocacional/PageFive';
import { PageSix } from '../../../components/pdf/interes-vocacional/PageSix';

interface PdfDocumentInteresVocacionalProps extends PageOneProps {
  // Add your own props here
  interes: string;
}

export const PdfDocumentInteresVocacional = (
  props: PdfDocumentInteresVocacionalProps
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
      <PageThree /> */}
      {/* <PageFour /> */}
      {/* <PageFive interests={interests} /> */}
      <PageSix />
      {/* <PageNine /> */}
    </Document>
  );
};
