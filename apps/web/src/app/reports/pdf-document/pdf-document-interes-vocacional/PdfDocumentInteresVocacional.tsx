import { Document } from '@react-pdf/renderer';
import {
  PageOne,
  PageOneProps,
} from '../../../components/pdf/interes-vocacional/PageOne';
import { PageTwo } from '../../../components/pdf/interes-vocacional/PageTwo';
import { PageThree } from '../../../components/pdf/interes-vocacional/PageThree';

interface PdfDocumentInteresVocacionalProps extends PageOneProps {
  // Add your own props here
  interes: string;
}

export const PdfDocumentInteresVocacional = (
  props: PdfDocumentInteresVocacionalProps
) => {
  return (
    <Document>
      <PageOne
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
    </Document>
  );
};
