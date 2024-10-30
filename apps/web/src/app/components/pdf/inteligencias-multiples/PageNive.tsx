import { Image, Link, Page, Text, View } from '@react-pdf/renderer';
import { LogoFooter } from '../LogoFooter';
import { DocumentsFooter } from '../DocumentsFooter';

export const PageNive = () => {
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
              'Estos  son  las  inteligencias  más  predominantes,  las mismas que te permiten resolver problemas y adecuarte al entorno en tu día a día. '
            }
          </Text>
          <Text>
            {
              'Es importante que las tomes en consideración pues al tomar conciencia de las habilidades que posees, se te hará más sencillo entender y procesar cualquier tema que se te presente.'
            }
          </Text>
          <View
            style={{
              backgroundColor: '#f2f2f2',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                paddingTop: 10,
                borderTop: 1,
                borderLeft: 1,
                borderRight: 1,
                borderColor: '#bfbfbf',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}
            >
              <View style={{ position: 'absolute', bottom: 0, left: 20 }}>
                <Image
                  style={{ height: 150, width: 150 }}
                  src="/src/assets/img/intelligences/footer_image.png"
                />
              </View>
              <View
                style={{ color: '#0a3552', marginLeft: 160, marginBottom: 10 }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    width: 290,
                    textAlign: 'justify',
                  }}
                >
                  {
                    '“Los niños dejan su marca en la vida haciendo lo que pueden hacer,  no  lo  que  no  pueden…  La escuela  es  importante,  pero  la  vida  es  más importante. Ser feliz es usar tus habilidades productivamente, sin importar cuáles sean”'
                  }
                </Text>
                <Text
                  style={{
                    fontStyle: 'italic',
                  }}
                >
                  {'(Howard Gardner)'}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#0a3552',
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  textAlign: 'justify',
                  lineHeight: 1.5,
                }}
              >
                {
                  'Si  tienes alguna duda o  consulta  sobre  tus  resultados  puedes escribirnos  a:  '
                }
                <Link
                  style={{
                    color: '#fff',
                  }}
                  src="informes@vocatio.pe"
                >
                  informes@vocatio.pe
                </Link>
                {',  con   gusto   un  profesional especializado te atenderá.'}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <LogoFooter />
      <DocumentsFooter />
    </Page>
  );
};
