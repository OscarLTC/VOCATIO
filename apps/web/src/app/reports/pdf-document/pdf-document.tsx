import { Font } from '@react-pdf/renderer';
import { Person } from '../../models/person.model';
import { SurveyProgramming } from '../../models/surveyProgramming.model';
import { Answer } from '../../models/answer.model';
import {
  ResultTypeFour,
  ResultTypeSix,
  ResultTypeTwo,
} from '../../models/result.model';
import PdfDocumentEstilosDeAprendizaje from './pdf-document-estilos-de-aprendizaje/pdf-document-estilos-de-aprendizaje';
import { PdfDocumentArquetipos } from './pdf-document-arquetipos/pdf-document-arquetipos';
import { PdfDocumentGeneral } from './pdf-document-general/pdf-document-general';
import { PdfDocumentHabilidadesBlandas } from './pdf-document-habilidades-blandas/PdfDocumentHabilidadesBlandas';
import { PdfDocumentHabitosDeEstudio } from './pdf-document-habitos-de-estudio/PdfDocumentHabitosDeEstudio';

interface PdfDocumentProps {
  imageURL: string;
  surveyId: number;
  person: Person;
  surveyProgramming: SurveyProgramming;
  answers: Answer[];
  endDate: string;
  maxIndexSurvey?: number | number[];
  resultForSurvey: ResultTypeSix | ResultTypeFour | ResultTypeTwo[];
  data?: any;
}

Font.register({
  family: 'Montserrat',
  fonts: [
    { src: '/fonts/montserrat/Montserrat-Bold.ttf', fontWeight: 'bold' },
    {
      src: '/fonts/montserrat/Montserrat-BoldItalic.ttf',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    { src: '/fonts/montserrat/Montserrat-Italic.ttf', fontStyle: 'italic' },
    { src: '/fonts/montserrat/Montserrat-Light.ttf', fontWeight: 300 },
    {
      src: '/fonts/montserrat/Montserrat-LightItalic.ttf',
      fontWeight: 300,
      fontStyle: 'italic',
    },
    { src: '/fonts/montserrat/Montserrat-Medium.ttf', fontWeight: 500 },
    {
      src: '/fonts/montserrat/Montserrat-MediumItalic.ttf',
      fontWeight: 500,
      fontStyle: 'italic',
    },
    { src: '/fonts/montserrat/Montserrat-Regular.ttf', fontWeight: 'normal' },
    { src: '/fonts/montserrat/Montserrat-SemiBold.ttf', fontWeight: 600 },
    {
      src: '/fonts/montserrat/Montserrat-SemiBoldItalic.ttf',
      fontWeight: 600,
      fontStyle: 'italic',
    },
    { src: '/fonts/montserrat/Montserrat-Thin.ttf', fontWeight: 100 },
    {
      src: '/fonts/montserrat/Montserrat-ThinItalic.ttf',
      fontWeight: 100,
      fontStyle: 'italic',
    },
  ],
});

Font.register({
  family: 'Poppins',
  fonts: [
    { src: '/fonts/poppins/Poppins-Bold.ttf', fontWeight: 'bold' },
    {
      src: '/fonts/poppins/Poppins-BoldItalic.ttf',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    { src: '/fonts/poppins/Poppins-Italic.ttf', fontStyle: 'italic' },
    { src: '/fonts/poppins/Poppins-Light.ttf', fontWeight: 300 },
    {
      src: '/fonts/poppins/Poppins-LightItalic.ttf',
      fontWeight: 300,
      fontStyle: 'italic',
    },
    { src: '/fonts/poppins/Poppins-Medium.ttf', fontWeight: 500 },
    {
      src: '/fonts/poppins/Poppins-MediumItalic.ttf',
      fontWeight: 500,
      fontStyle: 'italic',
    },
    { src: '/fonts/poppins/Poppins-Regular.ttf', fontWeight: 'normal' },
    { src: '/fonts/poppins/Poppins-SemiBold.ttf', fontWeight: 600 },
    {
      src: '/fonts/poppins/Poppins-SemiBoldItalic.ttf',
      fontWeight: 600,
      fontStyle: 'italic',
    },
    { src: '/fonts/poppins/Poppins-Thin.ttf', fontWeight: 100 },
    {
      src: '/fonts/poppins/Poppins-ThinItalic.ttf',
      fontWeight: 100,
      fontStyle: 'italic',
    },
  ],
});

export const PdfDocument = (props: PdfDocumentProps) => {
  console.log(props);
  return (
    <>
      {JSON.stringify(props)}

      {props.surveyId === 2 && (
        <PdfDocumentArquetipos
          person={props.person}
          surveyProgramming={props.surveyProgramming}
          imageURL={props.imageURL}
          resultForSurvey={props.resultForSurvey as ResultTypeTwo[]}
          maxIndexSurvey={props.maxIndexSurvey as number[]}
        />
      )}
      {props.surveyId === 3 && (
        <PdfDocumentHabilidadesBlandas
          person={{
            name: props.person.name,
            lastName: props.person.lastName,
          }}
          surveyProgramming={{
            section: props.surveyProgramming.section,
            endDate: props.surveyProgramming.endDate,
          }}
          skills={props.data}
        />
      )}
      {props.surveyId === 7 && (
        <PdfDocumentHabitosDeEstudio
          habits={props.data}
          person={{
            name: props.person.name,
            lastName: props.person.lastName,
          }}
          surveyProgramming={{
            section: props.surveyProgramming.section,
            endDate: props.surveyProgramming.endDate,
          }}
        />
      )}
      {props.surveyId === 6 && (
        <PdfDocumentEstilosDeAprendizaje
          answers={props.answers}
          endDate={props.endDate}
          imageURL={props.imageURL}
          person={props.person}
          resultForSurvey={props.resultForSurvey as ResultTypeSix}
          surveyProgramming={props.surveyProgramming}
          maxIndexSurvey={props.maxIndexSurvey as number}
        />
      )}
      {(props.surveyId === 1 ||
        props.surveyId === 4 ||
        props.surveyId === 5) && (
        <PdfDocumentGeneral
          answers={props.answers}
          endDate={props.endDate}
          imageURL={props.imageURL}
          person={props.person}
          resultForSurvey={props.resultForSurvey as ResultTypeSix}
          surveyProgramming={props.surveyProgramming}
          maxIndexSurvey={props.maxIndexSurvey as number}
        />
      )}
    </>
  );
};

export default PdfDocument;
