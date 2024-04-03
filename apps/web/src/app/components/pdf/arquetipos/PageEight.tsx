import { Image, Link, Page, Text, View } from '@react-pdf/renderer';
import { LogoHeader } from './LogoHeader';
import { TitlePdf } from '../Title';
import { DocumentsFooter } from '../DocumentsFooter';

export const PageEight = () => {
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
        <View style={{ width: '100%', display: 'flex', marginBottom: 70 }}>
          <Image
            style={{ width: 60, alignSelf: 'flex-end' }}
            src={'/src/assets/img/logo_principal_color.png'}
          />
        </View>
        <TitlePdf
          title={
            'Estos son los tres arquetipos\nde personalidad con los\nque mejor te identificas.'
          }
        />
        <Text
          style={{
            fontSize: 10.5,
            marginTop: 20,
            lineHeight: 1.5,
            paddingHorizontal: 10,
          }}
        >
          Es importante que sigas explorando y trabajando en tu
          autoconocimiento. El proceso no es corto, quizás dure toda la vida,
          pero lo importante es que mientras más te conozcas, más te aceptes y
          mucho más valor encontrarás en cada actividad que emprendas.
        </Text>
        <View style={{ marginTop: 30 }}>
          <View>
            <Image
              style={{ width: 220, position: 'absolute', left: 60 }}
              src={'/src/assets/img/archetypes/carl_jung.png'}
            />
            <View
              style={{
                width: 345,
                paddingVertical: 25,
                paddingLeft: 35,
                paddingRight: 25,
                backgroundColor: '#eeeeee',
                zIndex: -1,
                marginTop: 45,
                marginLeft: 180,
                borderTopRightRadius: 30,
              }}
            >
              <Text
                style={{
                  paddingLeft: 70,
                  fontSize: 12,
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                }}
              >
                “Tu visión se aclarará solamente cuando puedas mirar en tu
                propio corazón. Quien mira hacia afuera, sueña; quien mira hacia
                adentro, despierta”.{' '}
                <Text style={{ fontWeight: 'normal', fontStyle: 'normal' }}>
                  (Carl Jung)
                </Text>
              </Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#006699' }}>
            <Text
              style={{
                paddingHorizontal: 60,
                paddingVertical: 10,
                fontSize: 10.5,
                color: 'white',
                fontWeight: 'semibold',
                textAlign: 'justify',
              }}
            >
              Si tienes alguna duda o consulta sobre tus resultados puedes
              escribirnos a:{' '}
              <Link style={{ textDecoration: 'none', color: 'white' }} src="">
                gerencia@vocatio.pe
              </Link>
              , con gusto un profesional especializado te atenderá.
            </Text>
          </View>
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
