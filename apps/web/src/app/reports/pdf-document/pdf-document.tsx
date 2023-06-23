import './pdf-document.scss';
import {
  Document,
  Font,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import { Person } from '../../models/person.model';
import { SurveyProgramming } from '../../models/surveyProgramming.model';
import { Answer } from '../../models/answer.model';
import { ResultTypeFour, ResultTypeSix } from '../../models/result.model';
import { formatDate, getCustomDate } from '../../utils/dateUtils';

export interface PdfDocumentProps {
  imageURL: string;
  surveyId: number;
  person: Person;
  surveyProgramming: SurveyProgramming;
  answers: Answer[];
  endDate: string;
  maxIndexSurvey?: number;
  resultForSurvey: ResultTypeSix | ResultTypeFour;
}

Font.register({
  family: 'Montserrat',
  fonts: [
    { src: '/fonts/montserrat/Montserrat-Bold.ttf', fontWeight: 'bold' },
    {
      src: '/fonts/montserrat/Montserrat-BoldItalic.ttf',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    { src: '/fonts/montserrat/Montserrat-Italic.ttf', fontStyle: 'italic' },
    { src: '/fonts/montserrat/Montserrat-Light.ttf', fontWeight: 300 },
    {
      src: '/fonts/montserrat/Montserrat-LightItalic.ttf',
      fontWeight: 300,
      fontStyle: 'italic',
    },
    { src: '/fonts/montserrat/Montserrat-Medium.ttf', fontWeight: 500 },
    {
      src: '/fonts/montserrat/Montserrat-MediumItalic.ttf',
      fontWeight: 500,
      fontStyle: 'italic',
    },
    { src: '/fonts/montserrat/Montserrat-Regular.ttf', fontWeight: 'normal' },
    { src: '/fonts/montserrat/Montserrat-SemiBold.ttf', fontWeight: 600 },
    {
      src: '/fonts/montserrat/Montserrat-SemiBoldItalic.ttf',
      fontWeight: 600,
      fontStyle: 'italic',
    },
    { src: '/fonts/montserrat/Montserrat-Thin.ttf', fontWeight: 100 },
    {
      src: '/fonts/montserrat/Montserrat-ThinItalic.ttf',
      fontWeight: 100,
      fontStyle: 'italic',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 6,
    paddingHorizontal: 10,
    fontFamily: 'Montserrat',
  },
  pageHeader: {
    fontSize: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerLeft: {
    fontWeight: 'bold',
  },
  headerRight: {
    fontWeight: 'normal',
  },
  content: {
    paddingHorizontal: '20px',
  },

  image: {
    width: '60px',
    marginTop: '40px',
    marginLeft: 'auto',
  },

  hero: {
    width: '100%',
  },

  title: {
    color: '#006699',
    fontWeight: 'bold',
  },

  subtitle: {
    marginTop: '20px',
    color: '#006699',
    fontWeight: 'bold',
    fontSize: '15px',
  },

  subhero: {
    width: '330px',
    marginTop: '5px',
    fontSize: '11px',
    backgroundColor: '#006699',
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  maindata: {
    marginTop: '20px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  surveydata: {
    marginTop: '5px',
    fontSize: '12px',
  },
  chart: {
    width: '100%',
    height: '100%',
  },
});

export function PdfDocument(props: PdfDocumentProps) {
  const getResultSix = () => props.resultForSurvey as ResultTypeSix;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.pageHeader}>
          <View style={styles.headerLeft}>
            <Text>REPORTE DE RESULTADOS VOCATIO</Text>
          </View>
          <View style={styles.headerRight}>
            <Text>Lima - Perú, {formatDate(getCustomDate())}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.image}>
            <Image src={'/src/assets/img/logo_principal_color.png'} />
          </View>
          <View style={styles.hero}>
            <Text style={styles.title}>REPORTE DE RESULTADOS</Text>
            <View style={styles.subtitle}>
              <Text>Test de {props.surveyProgramming.survey.name}</Text>
            </View>
            {/* TODO: Preguntar sobre el subtitulo */}
            <Text style={styles.subhero}>
              (basado en la teoría de Richard Bandler y John Grinder )
            </Text>
            <View>
              <Text style={styles.maindata}>Nombres y Apellidos:</Text>
              <Text style={styles.surveydata}>
                {`${props.person.name} ${props.person.lastName}`}
              </Text>
              <Text style={styles.maindata}>Grado de instrucción:</Text>
              <Text style={styles.surveydata}>
                {props.surveyProgramming.section}
              </Text>
              <Text style={styles.maindata}>Fecha Culminación:</Text>
              <Text style={styles.surveydata}>{formatDate(props.endDate)}</Text>
            </View>
            <View style={{ marginTop: '20px', width: '500px' }}>
              <Image src={'/src/assets/img/portada_pdf_2.png'} />
            </View>
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.pageHeader}>
          <View style={styles.headerLeft}>
            <Text>REPORTE DE RESULTADOS VOCATIO</Text>
          </View>
          <View style={styles.headerRight}>
            <Text>Lima - Perú, {formatDate(getCustomDate())}</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              marginTop: '50px',
              fontWeight: 'bold',
              color: '#006699',
              fontSize: '20px',
            }}
          >
            PRESENTACIÓN
          </Text>
          <View
            style={{
              marginTop: '10px',
              width: '50px',
              height: '2px',
              backgroundColor: '#bfbfbf',
              alignSelf: 'center',
            }}
          ></View>
          {props.surveyId === 6 && (
            <View
              style={{
                marginTop: '20px',
                fontSize: '12px',
                paddingHorizontal: '40px',
              }}
            >
              <Text
                style={{
                  textAlign: 'justify',
                  lineHeight: '1.8',
                  fontWeight: 400,
                }}
              >
                {
                  'El   modelo  VAK  (visual  -  auditivo  -  kinestésico),  basado  en  el  sistema  de Programación  Neurolingüística  que  describe  cómo  trabaja  y  se  estructura  la mente  humana,  establece     categorías   en  función  al  modo  en  el  que  a  los estudiantes  les  llega  la  información  que  reciben del exterior:'
                }
              </Text>
              <Text
                style={{
                  textAlign: 'justify',
                  lineHeight: '1.8',
                  fontWeight: 400,
                  marginTop: '25px',
                }}
              >
                {
                  'Si   tenemos   en   cuenta  este   tipo  de  receptores  de  información,  podremos establecer  estrategias  y  técnicas  de  aprendizaje mucho más efectivas para tu desarrollo académico.'
                }
              </Text>
              <Text style={{ marginTop: '20px' }}>
                Los canales receptivos según el{' '}
                <Text style={{ fontWeight: 'bold' }}>modelo V.A.K.</Text> son:
              </Text>
              <View
                style={{
                  marginLeft: '40px',
                  textAlign: 'justify',
                  lineHeight: '2',
                }}
              >
                <Text style={{ marginTop: '30px' }}>
                  <Text style={{ fontWeight: 'bold' }}>1. Visual</Text>:
                  Estudiantes que aprenden a través de estímulos visuales.
                </Text>
                <Text style={{ marginTop: '10px' }}>
                  <Text style={{ fontWeight: 'bold' }}>2. Auditivo</Text>
                  {
                    ':   Estudiantes   que   aprenden   mejor  a  través de estímulos auditivos.'
                  }
                </Text>
                <Text style={{ marginTop: '10px' }}>
                  <Text style={{ fontWeight: 'bold' }}>3. Kinestésico</Text>
                  {
                    ':  Estudiantes  que  procesan  la  información  a  través de los sentidos (tacto, olfato y gusto) y a los movimientos.'
                  }
                </Text>
              </View>
              <Text
                style={{
                  marginTop: '30px',
                  lineHeight: '1.8',
                  textAlign: 'justify',
                }}
              >
                {
                  'El  presente  reporte    muestra   los   resultados en   base  a   nuestro  instrumento psicométrico, el  cuál   ha  sido  desarrollado  en  base  a   la teoría  de   estilos  de aprendizaje creada por Richard Bandler y John Grinder (1988),'
                }
              </Text>
              <Text
                style={{
                  marginTop: '20px',
                  lineHeight: '1.8',
                  textAlign: 'justify',
                }}
              >
                {
                  'Los     resultados    te   ayudarán   a   conocer   mejor    tu   estilo  de     aprendizaje predominante,  identificar    tus   características  más  importantes   y   los materiales para  facilitar tu  aprendizaje, lo  cual  podría  ayudarte  a  potenciar  el  tipo  de aprendizaje que posees.'
                }
              </Text>
              <Text style={{ marginTop: '20px' }}>
                A continuación, tus resultados:
              </Text>
            </View>
          )}
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '10px',
          }}
        >
          <View style={{ width: '40px', marginLeft: 'auto', opacity: 0.1 }}>
            <Image src={'/src/assets/img/image.png'} />
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.pageHeader}>
          <View style={styles.headerLeft}>
            <Text>REPORTE DE RESULTADOS VOCATIO</Text>
          </View>
          <View style={styles.headerRight}>
            <Text>Lima - Perú, {formatDate(getCustomDate())}</Text>
          </View>
        </View>

        <View style={{ padding: 30 }}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: '30px',
              fontWeight: 'bold',
              color: '#006699',
              fontSize: '20px',
            }}
          >
            GRÁFICA DE RESULTADOS
          </Text>
          <View
            style={{
              marginTop: '10px',
              width: '50px',
              height: '2px',
              backgroundColor: '#bfbfbf',
              alignSelf: 'center',
            }}
          ></View>
          {props.surveyId === 6 && (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: '40px',
                  justifyContent: 'center',
                  gap: '10px',
                  fontSize: '15px',
                }}
              >
                <View style={{ flexDirection: 'row', gap: '4px' }}>
                  <View
                    style={{
                      width: '15px',
                      height: '15px',
                      border: '2px',
                      borderColor: '#006699',
                      backgroundColor: `${
                        1 == props.maxIndexSurvey ?? '0' ? '#23ad8c' : '#fff'
                      }`,
                    }}
                  ></View>
                  <Text>Visual</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: '4px' }}>
                  <View
                    style={{
                      width: '15px',
                      height: '15px',
                      border: '2px',
                      borderColor: '#006699',
                      backgroundColor: `${
                        2 == props.maxIndexSurvey ?? '0' ? '#23ad8c' : '#fff'
                      }`,
                    }}
                  ></View>
                  <Text>Auditivo</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: '4px' }}>
                  <View
                    style={{
                      width: '15px',
                      height: '15px',
                      border: '2px',
                      borderColor: '#006699',
                      backgroundColor: `${
                        3 == props.maxIndexSurvey ?? '0' ? '#23ad8c' : '#fff'
                      }`,
                    }}
                  ></View>
                  <Text>Kinestésico</Text>
                </View>
              </View>
              <Image
                style={{
                  marginTop: '20px',
                  width: '400px',
                  marginHorizontal: 'auto',
                }}
                src={props.imageURL}
              />
              <View
                style={{
                  marginTop: '40px',
                  color: 'white',
                  fontSize: 12,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: '10px',
                  backgroundColor: '#a5a5a5',
                }}
              >
                <Text>Resultado de la prueba:</Text>
                <Text>
                  Se observó que hay mayor predominancia del estilo de
                  aprendizaje{' '}
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textTransform: 'capitalize',
                    }}
                  >
                    {getResultSix().learningStyle}
                  </Text>
                </Text>
              </View>
            </>
          )}
          {(props.surveyId === 3 ||
            props.surveyId === 4 ||
            props.surveyId === 1) && (
            <Image
              style={{
                marginTop: '20px',
                width: '400px',
                marginHorizontal: 'auto',
              }}
              src={props.imageURL}
            />
          )}
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '10px',
          }}
        >
          <View style={{ width: '40px', marginLeft: 'auto', opacity: 0.1 }}>
            <Image src={'/src/assets/img/image.png'} />
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.pageHeader}>
          <View style={styles.headerLeft}>
            <Text>REPORTE DE RESULTADOS VOCATIO</Text>
          </View>
          <View style={styles.headerRight}>
            <Text>Lima - Perú, {formatDate(getCustomDate())}</Text>
          </View>
        </View>
        {props.surveyId === 6 && (
          <View
            style={{
              marginTop: '90px',
              fontSize: '12px',
              paddingHorizontal: '50px',
            }}
          >
            <View>
              <Text style={{ fontWeight: 'bold' }}>
                {'1.   Categoría predominante:'}
              </Text>
              <Text style={{ marginTop: '10px', lineHeight: '1.8' }}>
                Luego del procesamiento de los datos brindados se obtiene como
                estilo de aprendizaje predominante:
              </Text>
              <View
                style={{
                  marginTop: '15px',
                  textAlign: 'center',
                  padding: '20px',
                  border: '1px',
                  borderColor: '#00bc8b',
                  borderRadius: '25px',
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  ESTILO {getResultSix().learningStyle}
                </Text>
                <Text
                  style={{
                    fontSize: '11px',
                    marginTop: '10px',
                    textAlign: 'justify',
                    lineHeight: '1.5',
                  }}
                >
                  {getResultSix().dominantCategory}
                </Text>
              </View>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold', marginTop: '30px' }}>
                2. Características más importantes:
              </Text>
              <Text
                style={{
                  fontSize: '11px',
                  marginTop: '30px',
                  textAlign: 'justify',
                  lineHeight: '2',
                  marginLeft: '40px',
                }}
              >
                {getResultSix()
                  .mainFeatures.split('.')
                  .map((feature, index) => {
                    if (
                      index !==
                      getResultSix().mainFeatures.split('.').length - 1
                    ) {
                      return <Text key={index}>{`o ${feature}. \n`}</Text>;
                    }
                  })}
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold', marginTop: '30px' }}>
                3. Palabras clave:
              </Text>
              <Text
                style={{
                  fontSize: '11px',
                  marginTop: '30px',
                  textAlign: 'justify',
                  lineHeight: '2',
                  marginLeft: '16px',
                }}
              >
                {getResultSix().keywords}
              </Text>
            </View>
          </View>
        )}

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '10px',
          }}
        >
          <View style={{ width: '40px', marginLeft: 'auto', opacity: 0.1 }}>
            <Image src={'/src/assets/img/image.png'} />
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.pageHeader}>
          <View style={styles.headerLeft}>
            <Text>REPORTE DE RESULTADOS VOCATIO</Text>
          </View>
          <View style={styles.headerRight}>
            <Text>Lima - Perú, {formatDate(getCustomDate())}</Text>
          </View>
        </View>
        {props.surveyId === 6 && (
          <View
            style={{
              marginTop: '90px',
              fontSize: '12px',
              paddingHorizontal: '50px',
            }}
          >
            <View>
              <View>
                <Text style={{ fontWeight: 'bold' }}>
                  {'4.   Recomendaciones: '}
                </Text>
                <Text
                  style={{
                    fontSize: '11px',
                    marginTop: '30px',
                    textAlign: 'justify',
                    lineHeight: '2',
                    marginLeft: '50px',
                  }}
                >
                  {getResultSix().recommnendations}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: '50px',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <View
                style={{
                  width: '110px',
                  height: '110px',
                  position: 'absolute',
                  borderRadius: '100%',
                }}
              >
                <Image
                  style={{
                    objectFit: 'cover',
                    height: '100%',
                    borderRadius: '100%',
                  }}
                  src={'/src/assets/img/knowledge.jpg'}
                />
              </View>
              <View
                style={{
                  border: '1px',
                  paddingVertical: '15px',
                  paddingHorizontal: '20px',
                  borderRadius: '15px',
                  borderColor: '#bfbfbf',
                  zIndex: '1',
                  marginLeft: '15px',
                }}
              >
                <Text
                  style={{
                    fontSize: '10px',
                    fontStyle: 'italic',
                    marginLeft: '90px',
                    lineHeight: 1.8,
                  }}
                >
                  “Conocer tu estilo de aprendizaje te ayudará a identificar el
                  método de estudio más adecuado para ti. De esta forma estarás
                  más cerca a conseguir tus metas académicas y tu éxito
                  personal.”
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: '90px',
                fontSize: '12px',
              }}
            >
              <Text>
                Si tienes alguna duda o consulta sobre tus resultados puedes
                escribirnos a: <Link src="#">gerencia@vocatio.pe</Link>, con
                gusto un profesional especializado te atenderá.
              </Text>
            </View>
          </View>
        )}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '10px',
          }}
        >
          <View style={{ width: '40px', marginLeft: 'auto', opacity: 0.1 }}>
            <Image src={'/src/assets/img/image.png'} />
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PdfDocument;
