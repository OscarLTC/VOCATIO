import { Image, Page, Text, View } from '@react-pdf/renderer';
import { LogoHeader } from './LogoHeader';
import { DocumentsFooter } from '../DocumentsFooter';
import { ArchetypesChart } from './ArchetypesChart';
import { data } from '../../../reports/reports-pdf/reports-pdf';

export const PageFour = () => {
  return (
    <Page
      size="A4"
      style={{
        flexDirection: 'column',
        display: 'flex',
        paddingVertical: 15,
        fontFamily: 'Poppins',
        color: '#434343',
      }}
    >
      <View style={{ paddingHorizontal: 35 }}>
        <LogoHeader />
        <View style={{ borderBottom: 3, borderColor: '#013552' }}>
          <Text style={{ color: '#013552', fontWeight: 'bold', fontSize: 30 }}>
            Gráfico de Resultados
          </Text>
        </View>
        <ArchetypesChart archetypes={data} />
      </View>
      <DocumentsFooter />
    </Page>
  );
};
