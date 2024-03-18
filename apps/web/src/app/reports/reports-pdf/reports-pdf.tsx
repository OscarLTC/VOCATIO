import { Document, PDFViewer } from '@react-pdf/renderer';
import { PdfDocumentHabilidadesBlandas } from '../pdf-document/pdf-document-habilidades-blandas/PdfDocumentHabilidadesBlandas';
import { PdfDocumentHabitosDeEstudio } from '../pdf-document/pdf-document-habitos-de-estudio/PdfDocumentHabitosDeEstudio';

export const data = [
  {
    title: 'Liderazgo',
    image: 'liderazgo.png',
    percentage: 100,
    color: '#0a937c',
  },
  {
    title: 'Resolución\nde conflictos',
    image: 'resolucion_de_problemas.png',
    percentage: 75,
    color: '#0a937c',
  },
  {
    title: 'Empatía',
    image: 'empatia.png',
    percentage: 70,
    color: '#0a937c',
  },
  {
    title: 'Gestión\ndel Tiempo',
    image: 'gestion_del_tiempo.png',
    percentage: 55,
    color: '#686868',
  },
  {
    title: 'Habilidades\norganizativas',
    image: 'habilidades_organizativas.png',
    percentage: 40,
    color: '#686868',
  },
  {
    title: 'Trabajo\nen equipo',
    image: 'trabajo_en_equipo.png',
    percentage: 30,
    color: '#9f9f9f',
  },
  {
    title: 'Comunicación',
    image: 'comunicacion.png',
    percentage: 20,
    color: '#9f9f9f',
  },
];

export const ReportsPdf = () => {
  return (
    <PDFViewer className="h-[100vh]">
      <PdfDocumentHabitosDeEstudio
        person={{
          name: 'Juan',
          lastName: 'Perez',
        }}
        surveyProgramming={{
          section: 'Sección 1',
          endDate: '2021-12-12',
        }}
        habits={data}
      />
    </PDFViewer>
  );
};
