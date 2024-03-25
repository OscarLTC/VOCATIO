import { Image, Link, Page, Text, View } from '@react-pdf/renderer';
import { DocumentsFooter } from '../DocumentsFooter';
import { LogoFooter } from '../LogoFooter';

export const PageNine = () => {
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
      <View style={{ paddingHorizontal: 50, marginTop: 70 }}>
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
              'Estos son los grupos vocacionales en los que denotas mayor interés. Es importante que explores cada uno de ellos, así como cada una de las carreras que contienen, para poder realizar una adecuada elección vocacional.'
            }
          </Text>
          <Text>
            {
              'Si deseas tomarte un tiempo para este proceso, es completamente válido, pero recuerda que debes iniciar una búsqueda activa, para así elegir una carrera con el máximo de conocimiento de la misma.'
            }
          </Text>
          <Text>
            {
              'Si, aun así, requieres de información adicional, te recomendamos indagar en otros aspectos importantes como son: tu personalidad, tus habilidades, tus hábitos de estudio, tus tipos de inteligencia, etc.  que maximizarán la seguridad de tu elección, pues te permitirán pasar de una etapa fantasía o tentativa, a una más realista.'
            }
          </Text>
          <View
            style={{
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              marginTop: 50,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 30,
              }}
            >
              <Image
                style={{
                  height: 150,
                  width: 200,
                  position: 'absolute',
                  bottom: 0,
                }}
                src="/src/assets/img/interest/footer_image.png"
              />
              <View
                style={{
                  color: '#0a3552',
                  backgroundColor: '#f2f2f2',
                  width: 600,
                  borderTopRightRadius: 20,
                  borderTop: 1,
                  borderRight: 1,
                  borderColor: '#bfbfbf',
                  paddingLeft: 100,
                  paddingVertical: 10,
                  marginLeft: 130,
                  zIndex: -1,
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    paddingTop: 10,
                    textAlign: 'justify',
                  }}
                >
                  {'“Cada vez que tomas una\ndecisión, cambias el futuro”'}
                </Text>
                <Text
                  style={{
                    fontStyle: 'italic',
                  }}
                >
                  {'(Deepak Chopra)'}
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
                  src="gerencia@vocatio.pe"
                >
                  gerencia@vocatio.pe
                </Link>
                {',  con   gusto   un  profesional especializado te atenderá.'}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
