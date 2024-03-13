import { Page, Text, View } from '@react-pdf/renderer';
import { DocumentsFooter } from '../DocumentsFooter';
import { CardHabilidades } from './CardHabilidades';
import { LogoFooter } from '../LogoFooter';

export const PageFour = () => {
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
          <CardHabilidades
            title="7. Empatía"
            description="Es la habilidad que nos permite no sólo comprender y entender a la otra parte, sino también conectarnos con su vivencia, como los expresa y como lo siente, favoreciendo la interacción y entendimiento mutuo, facilita los acuerdos y también mejora la comunicación en todos los contextos."
          />
          <Text
            style={{
              marginTop: 40,
            }}
          >
            {
              'El presente reporte muestra los resultados en base a nuestro instrumento psicométrico, el cuál ha sido desarrollado de acuerdo a las teorías modernas sobre las habilidades blandas.'
            }
          </Text>
          <Text>
            {
              'A continuación, apreciarás el nivel de desarrollo en cada una de las habilidades blandas.'
            }
          </Text>
        </View>
      </View>
      <LogoFooter />
      <DocumentsFooter />
    </Page>
  );
};
