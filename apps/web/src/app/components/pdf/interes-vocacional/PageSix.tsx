import { Page, Text, View } from '@react-pdf/renderer';
import { TitlePdf } from '../Title';
import { InterestData } from './InterestData';
import { DocumentsFooter } from '../DocumentsFooter';
import { LogoFooter } from '../LogoFooter';

export const PageSix = () => {
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
        <TitlePdf title="Grupos vocacionales de interés" />
        <View
          style={{
            paddingVertical: 10,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
              color: '#0a3552',
            }}
          >
            Área de interés muy alto:
          </Text>
          <InterestData
            careers={[
              'Física',
              'Química',
              'Biología',
              'Matemáticas',
              'Bioquímica',
            ]}
            color="#e07047"
            description="Las carreras relacionadas a las ciencias puras y/o experimentales, son todas aquellas que requieren del método científico para su estudio, con la finalidad de encontrar respuestas o explicaciones a distintos fenómenos y cuestionamientos."
            porcentage={85}
            title={'Ciencias puras\nexperimentales'}
            image="o_ciencias_puras.png"
          />
        </View>
      </View>
      <LogoFooter />
      <DocumentsFooter />
    </Page>
  );
};
