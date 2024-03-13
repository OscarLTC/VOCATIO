import { Document, PDFViewer } from '@react-pdf/renderer';
import { PageOne } from '../../components/pdf/habilidades-blandas/PageOne';
import { PageTwo } from '../../components/pdf/habilidades-blandas/PageTwo';
import { PageThree } from '../../components/pdf/habilidades-blandas/PageThree';
import { PageFour } from '../../components/pdf/habilidades-blandas/PageFour';
import { PageFive } from '../../components/pdf/habilidades-blandas/PageFive';
import { PageSix } from '../../components/pdf/habilidades-blandas/PageSix';

export const ReportsPdf = () => {
  return (
    <PDFViewer className="h-[100vh]">
      <Document>
        {/* <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour /> */}
        <PageFive />
        {/* <PageSix /> */}
      </Document>
    </PDFViewer>
  );
};
