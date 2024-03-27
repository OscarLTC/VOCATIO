import { PDFViewer } from '@react-pdf/renderer';
import { PdfDocumentInteligenciasMultiples } from '../pdf-document/pdf-document-inteligencias-multiples/PdfDocumentInteligenciasMultiples';
import { indicators } from '../../components/pdf/inteligencias-multiples/PagesData';
import { PdfDocumentInteresVocacional } from '../pdf-document/pdf-document-interes-vocacional/PdfDocumentInteresVocacional';
import { interests } from '../../components/pdf/interes-vocacional/PageFive';

export const data = [
  {
    title: 'Interpersonal',
    percentage: 95,
    color: '#e37047',
  },
  {
    title: 'Lingüística - Verbal',
    percentage: 85,
    color: '#e37047',
  },
  {
    title: 'Lógico - Matemática',
    percentage: 65,
    color: '#808080',
  },
  {
    title: 'Natural',
    percentage: 35,
    color: '#404040',
  },
  {
    title: 'Visual - Espacial',
    percentage: 25,
    color: '#9f9f9f',
  },
  {
    title: 'Intrapersonal',
    percentage: 15,
    color: '#404040',
  },
  {
    title: 'Kinestésica - Corporal',
    percentage: 5,
    color: '#bfbfbf',
  },
  {
    title: 'Musical',
    percentage: 5,
    color: '#606060',
  },
];

export const ReportsPdf = () => {
  return (
    <PDFViewer className="h-[100vh]">
      <PdfDocumentInteresVocacional
        person={{
          name: 'Juan',
          lastName: 'Perez',
        }}
        surveyProgramming={{
          section: 'Sección 1',
          endDate: '2021-12-12',
        }}
        interests={interests}
        data={[
          {
            careers: ['asd'],
            color: '#e37047',
            description: 'asd',
            image: 'asd',
            title: 'asd',
            percentage: 95,
          },
          {
            careers: ['asd'],
            color: '#e37047',
            description: 'asd',
            image: 'asd',
            title: 'asd',
            percentage: 95,
          },
          {
            careers: ['asd'],
            color: '#e37047',
            description: 'asd',
            image: 'asd',
            title: 'asd',
            percentage: 95,
          },
        ]}
      />
    </PDFViewer>
  );
};
