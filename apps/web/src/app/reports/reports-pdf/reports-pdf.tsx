import { PDFViewer } from '@react-pdf/renderer';
import { PdfDocumentArquetipos } from '../pdf-document/pdf-document-arquetipos/pdf-document-arquetipos';

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
      <PdfDocumentArquetipos
        person={{
          name: 'Juan',
          lastName: 'Perez',
        }}
        surveyProgramming={{
          section: 'Sección 1',
          endDate: '2021-12-12',
        }}
        resultForSurvey={[
          {
            archetype: 'Arquetipo 1',
            concept: 'Concepto 1',
            group_archetype: {
              color: 'red',
              hero: 'Heroe 1',
            },
            category_id: 132,
            characteristics: ['Característica 1', 'Característica 2'],
            definition: 'Definición 1',
            id: 1,
            image_archetype: ['image1.jpg'],
          },
          {
            archetype: 'Arquetipo 2',
            concept: 'Concepto 2',
            group_archetype: {
              color: 'blue',
              hero: 'Heroe 2',
            },
            category_id: 132,
            characteristics: ['Característica 1', 'Característica 2'],
            definition: 'Definición 2',
            id: 2,
            image_archetype: ['image2.jpg'],
          },
          {
            archetype: 'Arquetipo 3',
            concept: 'Concepto 3',
            group_archetype: {
              color: 'green',
              hero: 'Heroe 3',
            },
            category_id: 132,
            characteristics: ['Característica 1', 'Característica 2'],
            definition: 'Definición 3',
            id: 3,
            image_archetype: ['image3.jpg'],
          },
        ]}
      />
    </PDFViewer>
  );
};
