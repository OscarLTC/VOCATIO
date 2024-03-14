import { Document } from '@react-pdf/renderer';
import { PageFive } from '../../../components/pdf/habilidades-blandas/PageFive';
import { PageFour } from '../../../components/pdf/habilidades-blandas/PageFour';
import { PageOne } from '../../../components/pdf/habilidades-blandas/PageOne';
import { PageSix } from '../../../components/pdf/habilidades-blandas/PageSix';
import { PageThree } from '../../../components/pdf/habilidades-blandas/PageThree';
import { PageTwo } from '../../../components/pdf/habilidades-blandas/PageTwo';
import { Person } from '../../../models/person.model';
import { SkillChartProps } from '../../../components/pdf/habilidades-blandas/SkillChart';

interface PdfDocumentHabilidadesBlandasProps extends SkillChartProps {
  person: {
    name: string;
    lastName: string;
  };
  surveyProgramming: {
    section: string;
    endDate: string;
  };
}

export const PdfDocumentHabilidadesBlandas = (
  props: PdfDocumentHabilidadesBlandasProps
) => {
  return (
    <Document>
      <PageOne
        person={props.person}
        surveyProgramming={props.surveyProgramming}
      />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive skills={props.skills} />
      <PageSix />
    </Document>
  );
};
