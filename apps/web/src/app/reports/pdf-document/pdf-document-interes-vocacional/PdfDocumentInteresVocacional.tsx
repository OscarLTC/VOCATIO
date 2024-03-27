import { Document } from '@react-pdf/renderer';
import {
  PageOne,
  PageOneProps,
} from '../../../components/pdf/interes-vocacional/PageOne';
import { PageTwo } from '../../../components/pdf/interes-vocacional/PageTwo';
import { PageThree } from '../../../components/pdf/interes-vocacional/PageThree';
import { PageFour } from '../../../components/pdf/interes-vocacional/PageFour';
import { PageNine } from '../../../components/pdf/interes-vocacional/PageNine';
import { PageFive } from '../../../components/pdf/interes-vocacional/PageFive';
import {
  PageData,
  PageDataProps,
} from '../../../components/pdf/interes-vocacional/PageData';
import { InterestChartProps } from '../../../components/pdf/interes-vocacional/InterestChart';

interface PdfDocumentInteresVocacionalProps
  extends PageOneProps,
    PageDataProps,
    PageDataProps,
    InterestChartProps {}

export const PdfDocumentInteresVocacional = (
  props: PdfDocumentInteresVocacionalProps
) => {
  return (
    <Document>
      <PageOne {...props} />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive interests={props.interests} />
      <PageData data={props.data} />
      <PageNine />
    </Document>
  );
};
