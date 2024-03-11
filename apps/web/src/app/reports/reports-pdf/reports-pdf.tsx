import { Document, PDFViewer } from '@react-pdf/renderer';
import { PageOne } from '../../components/pdf/habilidades-blandas/PageOne';
import { PageTwo } from '../../components/pdf/habilidades-blandas/PageTwo';

export const ReportsPdf = () => {
  return (
    <PDFViewer className="h-[100vh]">
      <Document>
        <PageOne />
        <PageTwo />
      </Document>
    </PDFViewer>
  );
};
