import { PDFViewer } from '@react-pdf/renderer';
import { PdfDocumentInteligenciasMultiples } from '../pdf-document/pdf-document-inteligencias-multiples/PdfDocumentInteligenciasMultiples';
import { indicators } from '../../components/pdf/inteligencias-multiples/PagesData';

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
      <PdfDocumentInteligenciasMultiples
        person={{
          name: 'Juan',
          lastName: 'Perez',
        }}
        surveyProgramming={{
          section: 'Sección 1',
          endDate: '2021-12-12',
        }}
        intelligences={data}
        intelligencesData={[
          {
            indicators: indicators,
            text1:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
            text2:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
            image: 'interpersonal.png',
            title: 'Interpersonal',
            description:
              'Es de gran apoyo el aprendizaje por proyectos o el trabajo colaborativo donde tengas que hacer uso de la experesión verbal y otros medios comunicativos.',
          },
          {
            indicators: indicators,
            text1:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
            text2:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
            image: 'linguistica-verbal.png',
            title: 'Lingüística - Verbal',
            description:
              'Es de gran apoyo el aprendizaje por proyectos o el trabajo colaborativo donde tengas que hacer uso de la experesión verbal y otros medios comunicativos.',
          },
        ]}
      />
    </PDFViewer>
  );
};
