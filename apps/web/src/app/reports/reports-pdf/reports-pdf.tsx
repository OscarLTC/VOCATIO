import { PDFViewer } from '@react-pdf/renderer';
import { PdfDocumentArquetipos } from '../pdf-document/pdf-document-arquetipos/pdf-document-arquetipos';
import { PdfDocumentInteresVocacional } from '../pdf-document/pdf-document-interes-vocacional/PdfDocumentInteresVocacional';
import { title } from 'process';
import { useEffect } from 'react';
import { PdfDocumentHabilidadesBlandas } from '../pdf-document/pdf-document-habilidades-blandas/PdfDocumentHabilidadesBlandas';

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
      <PdfDocumentHabilidadesBlandas
        person={{
          name: 'SOFÍA',
          lastName: 'VARGAS ABAD',
        }}
        surveyProgramming={{
          endDate: '2024-07-18',
          section: 'III',
        }}
        skills={[]}
      />
    </PDFViewer>
  );
};
