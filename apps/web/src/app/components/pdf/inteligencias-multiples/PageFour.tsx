import { Page, Text, View } from '@react-pdf/renderer';
import { DocumentsFooter } from '../DocumentsFooter';
import { LogoFooter } from '../LogoFooter';
import {
  IntelligencesChart,
  IntelligencesChartProps,
} from './IntelligenceChart';
import { data } from '../../../reports/reports-pdf/reports-pdf';
import { TitlePdf } from '../Title';

export const PageFour = (props: IntelligencesChartProps) => {
  return (
    <Page
      size="A4"
      style={{
        flexDirection: 'column',
        display: 'flex',
        fontFamily: 'Poppins',
        color: '#434343',
      }}
    >
      <View style={{ paddingHorizontal: 35, marginTop: 70 }}>
        <View
          style={{
            fontSize: 12,
            paddingHorizontal: 20,
            marginTop: 15,
            flexDirection: 'column',
            fontWeight: 'light',
            gap: 10,
            textAlign: 'justify',
            lineHeight: 2,
          }}
        >
          <TitlePdf title="Resultados" />
          <IntelligencesChart intelligences={props.intelligences} />
        </View>
      </View>
      <LogoFooter />
      <DocumentsFooter />
    </Page>
  );
};
