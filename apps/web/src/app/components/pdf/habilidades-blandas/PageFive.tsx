import { Page, View } from '@react-pdf/renderer';
import { TitlePdf } from '../Title';

export const PageFive = () => {
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
        <TitlePdf title="Gráfica de resultados" />
      </View>
    </Page>
  );
};
