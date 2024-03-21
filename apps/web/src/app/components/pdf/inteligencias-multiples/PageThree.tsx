import { Page, Text, View } from '@react-pdf/renderer';
import { DocumentsFooter } from '../DocumentsFooter';
import { LogoFooter } from '../LogoFooter';

export const PageThree = () => {
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
          <Text>
            {
              'Un  aspecto  fundamental  en  esta  teoría  es  insistir  en  que  las inteligencias coexisten, es decir las poseemos todas, pero en diferentes grados, y estas a su vez se complementan, especialmente frente al desafío de resolver una problemática determinada, siendo todas igualmente importantes.'
            }
          </Text>
          <Text>
            {
              'El presente reporte muestra los  resultados en base    a    nuestro   instrumento psicométrico, el cuál ha sido desarrollado en base a la teoría de inteligencias múltiples de Gardner (1983),'
            }
          </Text>
          <Text>
            {
              'El  presente  reporte  te  ayudará  a  identificar  cual o cuales son los tipos de inteligencia predominantes en ti, determinando los indicadores más saltantes, los grupos profesionales que usualmente los poseen estas inteligencias y además ver la  manera  de  potenciar  y  aprovechar  al  máximo  tus  inteligencias  más desarrolladas.'
            }
          </Text>
          <Text>{'A continuación, tus resultados:'}</Text>
        </View>
      </View>
      <LogoFooter />
      <DocumentsFooter />
    </Page>
  );
};
