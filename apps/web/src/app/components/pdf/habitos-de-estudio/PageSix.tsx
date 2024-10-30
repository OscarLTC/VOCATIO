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
              'Recuerda  qué  para  optimizar  tus  hábitos  hacia el estudio, debes de empezar a trabajar las variables que hayan alcanzado los niveles de “regular”, “bajo” y “muy bajo”, pues estas pueden a futuro interferir y/o retrasar  tus  objetivos  y  metas. Presta especial  atención  a  los  resultados  obtenidos en la evaluación y pon en práctica todas las condiciones que requieras (según el caso) sean actitudinales, físicas, motivaciones y/o aplicar técnicas de estudio para mejorar tu desempeño académico y aprendizaje.'
            }
          </Text>
          <Text style={{ marginTop: 10 }}>
            {
              'Recuerda que los hábitos son conductas aprendidas, que al igual que cualquier otro comportamiento, se puede fortalecer o desaprender, dependiendo del grado de responsabilidad y compromiso que pongas en cada cosa que haces. '
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
                paddingTop: 20,
                borderTop: 1,
                borderLeft: 1,
                borderRight: 1,
                borderColor: '#bfbfbf',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}
            >
              <View style={{ position: 'absolute', bottom: 0 }}>
                <Image
                  style={{ height: 150, width: 200 }}
                  src="/src/assets/img/habits/footer_image.png"
                />
              </View>
              <View
                style={{ color: '#0a3552', marginLeft: 130, marginBottom: 20 }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    width: 300,
                    textAlign: 'justify',
                  }}
                >
                  {
                    '“El hecho es que los buenos hábitos son difíciles de crear, pero una vez creados, es fácil vivir con ellos. En cambio, los malos hábitos son fáciles de crear, pero es difícil vivir con ellos”'
                  }
                </Text>
                <Text
                  style={{
                    fontStyle: 'italic',
                    marginLeft: 60,
                  }}
                >
                  {'(Brian Tracy)'}
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
