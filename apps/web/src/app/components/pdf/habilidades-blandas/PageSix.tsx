import { Image, Link, Page, Text, View } from '@react-pdf/renderer';
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
              'Recuerda que las habilidades blandas que se ubican en los niveles alto y muy alto, son tus  fortalezas  principales  y se pueden potenciar, mientras que las ubicadas en  los  niveles  bajo  y  muy  bajo, pueden mejorar en la medida que desees trabajarlas.'
            }
          </Text>
          <Text style={{ marginTop: 10 }}>
            {
              'Es importante que recuerdes que tan valiosos son los conocimientos teóricos y prácticos, como lo son los recursos emocionales que tienes como ser humano. '
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
                paddingTop: 30,
                borderTop: 1,
                borderLeft: 1,
                borderRight: 1,
                borderColor: '#bfbfbf',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}
            >
              <Image
                style={{ height: 120, width: 160 }}
                src="/src/assets/img/skills/footer_image.png"
              />
              <View style={{ color: '#0a3552' }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    width: 280,
                    paddingTop: 10,
                    textAlign: 'justify',
                  }}
                >
                  {
                    '“He aquí mi secreto, que no puede ser más simple:  sólo  con  el  corazón  se puede  ver bien; lo esencial es invisible a los ojos”'
                  }
                </Text>
                <Text
                  style={{
                    fontStyle: 'italic',
                  }}
                >
                  {'(Antoine de Saint-Exupér)'}
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
