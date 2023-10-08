import {
  Document,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import './pdf-document-arquetipos.scss';
import { Person } from '../../../models/person.model';
import { SurveyProgramming } from '../../../models/surveyProgramming.model';
import { ResultTypeTwo } from '../../../models/result.model';
import { useState } from 'react';
import { formatDateText } from '../../../utils/dateUtils';

/* eslint-disable-next-line */
export interface PdfDocumentArquetiposProps {
  person: Person;
  surveyProgramming: SurveyProgramming;
  resultForSurvey: ResultTypeTwo[];
  maxIndexSurvey: number[];
  imageURL: string;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    display: 'flex',
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontFamily: 'Poppins',
    color: '#434343',
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
    paddingHorizontal: '25px',
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
  labels: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  topLabel: {
    position: 'absolute',
    top: -20,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  rightLabel: {
    position: 'absolute',
    right: -20,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  bottomLabel: {
    position: 'absolute',
    bottom: -20,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  leftLabel: {
    position: 'absolute',
    left: -20,
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export function PdfDocumentArquetipos(props: PdfDocumentArquetiposProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.content}>
          <View style={{ marginTop: 70, marginBottom: 10 }}>
            <Text style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3 }}>
              REPORTE DE RESULTADOS
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderTop: 3,
              borderBottom: 3,
              borderColor: '#013552',
              paddingVertical: 15,
              color: '#013552',
            }}
          >
            <View style={{ width: '350px' }}>
              <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
                Test de Arquetipos de Personalidad
              </Text>
              <Text style={{ fontSize: 15, fontWeight: 'semibold' }}>
                (Basado en la teoría de Carl Jung)
              </Text>
            </View>
            <Image
              style={{ width: 70 }}
              src={'/src/assets/img/logo_principal_color.png'}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Image
            style={{ width: 520 }}
            src={'/src/assets/img/portada_arquetipos.png'}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#013552',
            marginHorizontal: 30,
            paddingVertical: 30,
            paddingHorizontal: 60,
            color: 'white',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            fontSize: 13,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 5,
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>Nombre y Apellidos:</Text>
            <Text
              style={{
                fontSize: 12,
                alignSelf: 'center',
                fontWeight: 'medium',
              }}
            >
              {`${props.person.name} ${props.person.lastName}`}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 5,
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>Grado de Instrucción:</Text>
            <Text
              style={{
                fontSize: 12,
                alignSelf: 'center',
                fontWeight: 'medium',
              }}
            >
              {props.surveyProgramming.section}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 5,
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>Fecha de Culminación: </Text>
            <Text
              style={{
                fontSize: 12,
                alignSelf: 'center',
                fontWeight: 'medium',
              }}
            >
              {formatDateText(props.surveyProgramming.endDate)}
            </Text>
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={{ width: '100%', display: 'flex' }}>
          <Image
            style={{ width: 45, alignSelf: 'flex-end', opacity: 0.1 }}
            src={'/src/assets/img/image.png'}
          />
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <View style={{ borderBottom: 3, borderColor: '#013552' }}>
            <Text
              style={{ color: '#013552', fontWeight: 'bold', fontSize: 30 }}
            >
              Presentación
            </Text>
          </View>
          <View style={{ fontSize: 10.5, marginTop: 15 }}>
            <Text style={{ padding: 8, lineHeight: 1.5, textAlign: 'justify' }}>
              {
                'La palabra "arquetipo" proviene del griego "arjé",  que significa fuente,  principio u origen y de "tipos"  que significa modelos.  Es decir,  ambos términos conjuntamente significarán  algo así como:'
              }
              <Text style={{ marginLeft: 8, fontWeight: 'bold' }}>
                {' modelo original o patrón único.'}
              </Text>
            </Text>
            <Text style={{ padding: 5, lineHeight: 1.5, textAlign: 'justify' }}>
              Según <Text style={{ fontWeight: 'bold' }}>Carl G. Jung </Text>
              {
                ' existe un sistema de 12  arquetipos  dentro  de cada persona,  es decir,  que cada uno de nosotros  tiene su  propia rueda de 12 arquetipos. Unos afloran en mayor o menor grado, dependiendo de las circunstancias de la vida.'
              }
            </Text>
            <Text style={{ padding: 5, lineHeight: 1.5, textAlign: 'justify' }}>
              {
                'Los arquetipos de Jung son modelos de pensar, sentir y actuar los cuales están presentes en todas las culturas y civilizaciones.'
              }
            </Text>
            <Text style={{ padding: 5, lineHeight: 1.5, textAlign: 'justify' }}>
              {
                'De esos arquetipos obtenemos información útil para entender quiénes somos y cómo actuamos.'
              }
            </Text>
            <Text style={{ padding: 5, lineHeight: 1.5, textAlign: 'justify' }}>
              {
                'Los 12 arquetipos se desprenden 4 categorías que abarcan las principales motivaciones o deseos en la vida de un ser humano, a través de las cuales se manifiestan en la sociedad:'
              }
            </Text>
          </View>
          <View style={{ fontSize: 9, marginTop: 8 }}>
            <View
              style={{
                flexDirection: 'row',
                fontWeight: 'bold',
                paddingVertical: 7,
                paddingLeft: 15,
                color: 'white',
                backgroundColor: '#dd6e4b',
                borderTopRightRadius: 20,
                fontSize: 12,
              }}
            >
              <Text>1.</Text>
              <Text style={{ marginLeft: 15 }}>
                CATEGORÍA: PROMOVER ESTRUCTURA AL MUNDO (ORDEN)
              </Text>
            </View>
            <View style={{ display: 'flex', gap: 10, paddingHorizontal: 8 }}>
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 10.5,
                  fontWeight: 'normal',
                  marginLeft: 10,
                }}
              >
                En esta categoría se hallan las personalidades que tienden a:
              </Text>
              <View
                style={{
                  paddingVertical: 10,
                  paddingLeft: 20,
                  borderRadius: 12,
                  backgroundColor: '#fcfafa',
                  flexDirection: 'row',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>a.</Text>
                <Text style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>El Control: </Text>
                  Buscan crear una familia o comunidad próspera y exitosa.
                  Arquetipo: El Gobernante.
                </Text>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingLeft: 20,
                  borderRadius: 12,
                  backgroundColor: '#fcfafa',
                  flexDirection: 'row',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>b.</Text>
                <Text style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>La Innovación: </Text>
                  Buscan crear cosas de valor duradero para los demás.
                  Arquetipo: El Creador.
                </Text>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingLeft: 20,
                  borderRadius: 12,
                  backgroundColor: '#fcfafa',
                  flexDirection: 'row',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>c.</Text>
                <Text style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>El Control: </Text>
                  Buscan crear una familia o comunidad próspera y exitosa.
                  Arquetipo: El Gobernante.
                </Text>
              </View>
            </View>
          </View>
          <View style={{ fontSize: 9, marginTop: 20 }}>
            <View
              style={{
                flexDirection: 'row',
                fontWeight: 'bold',
                paddingVertical: 7,
                paddingLeft: 15,
                color: 'white',
                backgroundColor: '#ed8caa',
                borderTopRightRadius: 20,
                fontSize: 12,
              }}
            >
              <Text>2.</Text>
              <Text style={{ marginLeft: 15 }}>
                CATEGORÍA: CONECTAR CON OTROS (SOCIAL)
              </Text>
            </View>
            <View style={{ display: 'flex', gap: 10, paddingHorizontal: 8 }}>
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 10.5,
                  fontWeight: 'normal',
                  marginLeft: 10,
                }}
              >
                En esta categoría se hallan las personalidades que tienden a:
              </Text>
              <View
                style={{
                  paddingVertical: 10,
                  paddingLeft: 20,
                  paddingRight: 15,
                  borderRadius: 12,
                  backgroundColor: '#fcfafa',
                  flexDirection: 'row',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>a.</Text>
                <Text style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>La Intimidad: </Text>
                  Buscan estar en una relación armónica con las personas, el
                  trabajo y el entorno que los rodea. Arquetipo: El Amante.
                </Text>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingLeft: 20,
                  borderRadius: 12,
                  backgroundColor: '#fcfafa',
                  flexDirection: 'row',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>b.</Text>
                <Text style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>La Pertenencia: </Text>
                  Buscan pertenecer o formar parte de un grupo o familia.
                  Arquetipo: El Amigo.
                </Text>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingLeft: 20,
                  borderRadius: 12,
                  backgroundColor: '#fcfafa',
                  flexDirection: 'row',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>c.</Text>
                <Text style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>La Diversión: </Text>
                  Buscan aligerar la carga y hacer sentir bien a los demás.
                  Arquetipo: El Bromista.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#013552',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            color: 'white',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            flexDirection: 'row',
            fontSize: 12,
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 25,
          }}
        >
          <View style={{ flexDirection: 'row', gap: 3 }}>
            <Text style={{ fontSize: 11, fontWeight: 'medium' }}>
              Reporte de Resultados
            </Text>
            <Text style={{ fontWeight: 'bold' }}>VOCATIO</Text>
          </View>
          <Text style={{ fontWeight: 'medium' }}>2023</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={{ width: '100%', display: 'flex' }}>
          <Image
            style={{ width: 45, alignSelf: 'flex-end', opacity: 0.1 }}
            src={'/src/assets/img/image.png'}
          />
        </View>
        <View style={{ paddingHorizontal: 15, marginTop: 25 }}>
          <View style={{ fontSize: 9 }}>
            <View
              style={{
                flexDirection: 'row',
                fontWeight: 'bold',
                paddingVertical: 7,
                paddingLeft: 15,
                color: 'white',
                backgroundColor: '#1b4ad4',
                borderTopRightRadius: 20,
                fontSize: 12,
              }}
            >
              <Text>3.</Text>
              <Text style={{ marginLeft: 15 }}>
                CATEGORÍA: DEJAR UNA HUELLA EN EL MUNDO (EGO)
              </Text>
            </View>
            <View style={{ display: 'flex', gap: 10, paddingHorizontal: 8 }}>
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 10.5,
                  fontWeight: 'normal',
                  marginLeft: 10,
                }}
              >
                En esta categoría se hallan las personalidades que tienden a:
              </Text>
              <View
                style={{
                  paddingVertical: 10,
                  paddingLeft: 20,
                  paddingRight: 25,
                  borderRadius: 12,
                  backgroundColor: '#fcfafa',
                  flexDirection: 'row',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>a.</Text>
                <Text style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>La Maestría: </Text>
                  Buscan proteger a los más débiles y defender a aquellos con
                  quienes se cometen injusticias. Arquetipo: El Héroe.
                </Text>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingLeft: 20,
                  borderRadius: 12,
                  backgroundColor: '#fcfafa',
                  flexDirection: 'row',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>b.</Text>
                <Text style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>La Liberación: </Text>
                  Buscan derribar todo aquello que sea obsoleto y no funcione.
                  Arquetipo: El Rebelde.
                </Text>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingLeft: 20,
                  borderRadius: 12,
                  backgroundColor: '#fcfafa',
                  flexDirection: 'row',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>c.</Text>
                <Text style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>El Poder: </Text>Buscan
                  inspirar a otros a través de su creatividad e ingenio.
                  Arquetipo: El Mago.
                </Text>
              </View>
            </View>
          </View>
          <View style={{ fontSize: 9, marginTop: 40 }}>
            <View
              style={{
                flexDirection: 'row',
                fontWeight: 'bold',
                paddingVertical: 7,
                paddingLeft: 15,
                color: 'white',
                backgroundColor: '#0a937c',
                borderTopRightRadius: 20,
                fontSize: 12,
              }}
            >
              <Text>4.</Text>
              <Text style={{ marginLeft: 15 }}>
                CATEGORÍA: PERSEGUIR LA ESPIRITUALIDAD Y LA REALIZACIÓN
                (LIBERTAD)
              </Text>
            </View>
            <View style={{ display: 'flex', gap: 10, paddingHorizontal: 8 }}>
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 10.5,
                  fontWeight: 'normal',
                  marginLeft: 10,
                }}
              >
                En esta categoría se hallan las personalidades que tienden a:
              </Text>
              <View
                style={{
                  paddingVertical: 10,
                  paddingRight: 20,
                  paddingLeft: 20,
                  borderRadius: 12,
                  backgroundColor: '#fcfafa',
                  flexDirection: 'row',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>a.</Text>
                <Text style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>El Conocimiento: </Text>
                  Buscan usar la inteligencia para entender el mundo y enseñar a
                  otros. Arquetipo: El Sabio.
                </Text>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingLeft: 20,
                  borderRadius: 12,
                  backgroundColor: '#fcfafa',
                  flexDirection: 'row',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>b.</Text>
                <Text style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>La Libertad: </Text>
                  Buscan experimentar la mayor cantidad de vivencias posibles en
                  una vida. Arquetipo: El Explorador.
                </Text>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingLeft: 20,
                  borderRadius: 12,
                  backgroundColor: '#fcfafa',
                  flexDirection: 'row',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>c.</Text>
                <Text style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>La Seguridad: </Text>
                  Buscan generar un ambiente de felicidad para los que lo rodean
                  haciendo frente a los problemas de manera sencilla. Arquetipo:
                  El Inocente
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              fontSize: 10.5,
              marginTop: 40,
              paddingHorizontal: 15,
              flexDirection: 'column',
              gap: 15,
              lineHeight: 1.5,
            }}
          >
            <Text>
              El presente reporte tiene como finalidad mostrar la presencia de
              los <Text style={{ fontWeight: 'bold' }}>12 arquetipos</Text> de
              los que habla Jung, para centrarnos en los más sobresalientes
              dentro de tu personalidad.
            </Text>
            <Text>
              Los resultados te ayudarán a comprender quién eres, cómo
              interactúas con tu entorno, que es lo que motiva y que buscas en
              tus relaciones interpersonales.
            </Text>
            <Text>
              Conocer tu personalidad te ayudará a tomar mejores decisiones en
              tu vida y a comprender mejor a las personas.
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#013552',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            color: 'white',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            flexDirection: 'row',
            fontSize: 12,
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 25,
          }}
        >
          <View style={{ flexDirection: 'row', gap: 3 }}>
            <Text style={{ fontSize: 11, fontWeight: 'medium' }}>
              Reporte de Resultados
            </Text>
            <Text style={{ fontWeight: 'bold' }}>VOCATIO</Text>
          </View>
          <Text style={{ fontWeight: 'medium' }}>2023</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={{ width: '100%', display: 'flex' }}>
          <Image
            style={{ width: 45, alignSelf: 'flex-end', opacity: 0.1 }}
            src={'/src/assets/img/image.png'}
          />
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <View style={{ borderBottom: 3, borderColor: '#013552' }}>
            <Text
              style={{ color: '#013552', fontWeight: 'bold', fontSize: 30 }}
            >
              Gráfico de Resultados
            </Text>
          </View>
          <View style={{ fontSize: 10.5 }}>
            <Text style={{ marginTop: 20, padding: 5 }}>
              De acuerdo a los resultados, obtenemos este diagrama en el cual
              podemos apreciar cómo se presentan tus arquetipos de personalidad:
            </Text>
            <View
              style={{
                marginTop: 30,
              }}
            >
              <Image
                style={{
                  width: 400,
                  height: 400,
                  marginHorizontal: 'auto',
                }}
                src={props.imageURL}
              />
              <View style={{ ...styles.labels, color: 'white' }}>
                <View
                  style={[
                    styles.labelText,
                    styles.topLabel,
                    { marginLeft: 25 },
                  ]}
                >
                  <Text
                    style={{
                      backgroundColor: '#dd6e4b',
                      paddingHorizontal: 20,
                      paddingVertical: 4,
                    }}
                  >
                    Orden
                  </Text>
                </View>
                <View
                  style={[
                    styles.labelText,
                    styles.rightLabel,
                    { marginTop: 35 },
                  ]}
                >
                  <Text
                    style={{
                      backgroundColor: '#0a937c',
                      paddingHorizontal: 10,
                      paddingVertical: 4,
                    }}
                  >
                    Libertad
                  </Text>
                </View>
                <View
                  style={[
                    styles.labelText,
                    styles.bottomLabel,
                    { marginLeft: 25 },
                  ]}
                >
                  <Text
                    style={{
                      backgroundColor: '#ed8caa',
                      paddingHorizontal: 20,
                      paddingVertical: 4,
                    }}
                  >
                    Social
                  </Text>
                </View>
                <View
                  style={[
                    styles.labelText,
                    styles.leftLabel,
                    { marginTop: 35 },
                  ]}
                >
                  <Text
                    style={{
                      backgroundColor: '#1b4ad4',
                      paddingHorizontal: 25,
                      paddingVertical: 4,
                    }}
                  >
                    Ego
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 30,
                color: 'white',
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  backgroundColor: '#595959',
                }}
              >
                A continuación, hablaremos de los arquetipos de personalidad más
                predominantes en ti.
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#013552',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            color: 'white',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            flexDirection: 'row',
            fontSize: 12,
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 25,
          }}
        >
          <View style={{ flexDirection: 'row', gap: 3 }}>
            <Text style={{ fontSize: 11, fontWeight: 'medium' }}>
              Reporte de Resultados
            </Text>
            <Text style={{ fontWeight: 'bold' }}>VOCATIO</Text>
          </View>
          <Text style={{ fontWeight: 'medium' }}>2023</Text>
        </View>
      </Page>
      <Page size="A4" style={{ ...styles.page, paddingHorizontal: 0 }}>
        <View style={{ width: '100%', display: 'flex', paddingHorizontal: 20 }}>
          <Image
            style={{ width: 45, alignSelf: 'flex-end', opacity: 0.1 }}
            src={'/src/assets/img/image.png'}
          />
        </View>
        <View>
          <View
            style={{
              borderBottom: 3,
              borderColor: '#013552',
              marginHorizontal: 40,
              marginTop: 10,
              paddingBottom: 10,
            }}
          >
            <Text>Primer Arquetipo:</Text>
            <Text
              style={{ color: '#013552', fontWeight: 'bold', fontSize: 30 }}
            >
              {`${props.resultForSurvey[0]?.archetype} `}
              <Text style={{ fontWeight: 'normal' }}>
                ({props.resultForSurvey[0]?.concept})
              </Text>
            </Text>
          </View>
          <View
            style={{
              fontSize: 12,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 30,
            }}
          >
            <View style={{ marginRight: 20 }}>
              <Image
                style={{
                  width: 200,
                  marginLeft: 20,
                  marginTop: `${
                    props.resultForSurvey[0]?.category_id == 132 ? 25 : 0
                  }`,
                }}
                src={`/src/assets/img/${props.resultForSurvey[0]?.image_archetype[0]}`}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 220,
                  height: 100,
                  backgroundColor: `${props.resultForSurvey[0].group_archetype.color}`,
                  opacity: 0.53,
                  zIndex: -1,
                  borderTopRightRadius: 30,
                }}
              ></View>
            </View>
            <View style={{ width: 315, marginTop: 15 }}>
              <View
                style={{
                  paddingVertical: 8,
                  paddingLeft: 8,
                  backgroundColor: `${props.resultForSurvey[0].group_archetype.color}`,
                  borderTopRightRadius: 15,
                  color: 'white',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>
                  Motivación o deseo principal en la vida:
                </Text>
                <Text>{props.resultForSurvey[0].group_archetype.hero}</Text>
              </View>
              <View style={{ marginTop: 5, paddingLeft: 10 }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: `${props.resultForSurvey[0].group_archetype.color}`,
                    marginVertical: 20,
                    fontSize: 12,
                  }}
                >
                  Definición:
                </Text>
                <Text
                  style={{
                    textAlign: 'justify',
                    lineHeight: 1.4,
                    fontSize: 11,
                    color: '#595959',
                  }}
                >
                  {props.resultForSurvey[0].definition}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              fontSize: 12,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 30,
            }}
          >
            <View style={{ width: 315, marginTop: 15, fontSize: 9 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: `${props.resultForSurvey[0].group_archetype.color}`,
                  marginBottom: 10,
                }}
              >
                Aspectos más importantes:
              </Text>
              <View
                style={{
                  marginTop: 5,
                  flexDirection: 'column',
                  gap: 10,
                  color: '#404040',
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 9,
                    paddingVertical: 9,
                    backgroundColor: '#fcfafa',
                    borderRadius: 10,
                  }}
                >
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>{'Su meta: '}</Text>
                    {props.resultForSurvey[0].characteristics[0]}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 9,
                    paddingVertical: 9,
                    backgroundColor: '#fcfafa',
                    borderRadius: 10,
                  }}
                >
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>
                      {'Su mayor temor: '}
                    </Text>
                    {props.resultForSurvey[0].characteristics[1]}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 9,
                    paddingVertical: 9,
                    backgroundColor: '#fcfafa',
                    borderRadius: 10,
                  }}
                >
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>
                      {'Su punto débil: '}
                    </Text>
                    {props.resultForSurvey[0].characteristics[2]}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 9,
                    paddingVertical: 9,
                    backgroundColor: '#fcfafa',
                    borderRadius: 10,
                  }}
                >
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>
                      {'Sus talentos: '}
                    </Text>
                    {props.resultForSurvey[0].characteristics[3]}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                marginLeft: 20,
              }}
            >
              <Image
                style={{
                  width: 200,
                  marginRight: 20,
                  marginTop: `${
                    props.resultForSurvey[0].category_id == 132 ? 25 : 0
                  }`,
                }}
                src={`/src/assets/img/${props.resultForSurvey[0].image_archetype[1]}`}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 220,
                  height: 100,
                  backgroundColor: `${props.resultForSurvey[0].group_archetype.color}`,
                  opacity: 0.53,
                  zIndex: -1,
                  borderTopLeftRadius: 30,
                }}
              ></View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#013552',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            color: 'white',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            flexDirection: 'row',
            fontSize: 12,
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 25,
          }}
        >
          <View style={{ flexDirection: 'row', gap: 3 }}>
            <Text style={{ fontSize: 11, fontWeight: 'medium' }}>
              Reporte de Resultados
            </Text>
            <Text style={{ fontWeight: 'bold' }}>VOCATIO</Text>
          </View>
          <Text style={{ fontWeight: 'medium' }}>2023</Text>
        </View>
      </Page>
      <Page size="A4" style={{ ...styles.page, paddingHorizontal: 0 }}>
        <View style={{ width: '100%', display: 'flex', paddingHorizontal: 20 }}>
          <Image
            style={{ width: 45, alignSelf: 'flex-end', opacity: 0.1 }}
            src={'/src/assets/img/image.png'}
          />
        </View>
        <View>
          <View
            style={{
              borderBottom: 3,
              borderColor: '#013552',
              marginHorizontal: 40,
              marginTop: 10,
              paddingBottom: 10,
            }}
          >
            <Text>Segundo Arquetipo:</Text>
            <Text
              style={{ color: '#013552', fontWeight: 'bold', fontSize: 30 }}
            >
              {`${props.resultForSurvey[1].archetype} `}
              <Text style={{ fontWeight: 'normal' }}>
                ({props.resultForSurvey[1].concept})
              </Text>
            </Text>
          </View>
          <View
            style={{
              fontSize: 12,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 30,
            }}
          >
            <View style={{ width: 315, marginTop: 15 }}>
              <View
                style={{
                  paddingVertical: 8,
                  paddingLeft: 8,
                  backgroundColor: `${props.resultForSurvey[1].group_archetype.color}`,
                  borderTopRightRadius: 15,
                  color: 'white',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>
                  Motivación o deseo principal en la vida:
                </Text>
                <Text>{props.resultForSurvey[1].group_archetype.hero}</Text>
              </View>
              <View style={{ marginTop: 5, paddingLeft: 10 }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: `${props.resultForSurvey[1].group_archetype.color}`,
                    marginVertical: 20,
                    fontSize: 12,
                  }}
                >
                  Definición:
                </Text>
                <Text
                  style={{
                    textAlign: 'justify',
                    lineHeight: 1.4,
                    fontSize: 11,
                    color: '#595959',
                  }}
                >
                  {props.resultForSurvey[1].definition}
                </Text>
              </View>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Image
                style={{
                  width: 200,
                  marginRight: 20,
                  marginTop: `${
                    props.resultForSurvey[1].category_id == 132 ? 20 : 0
                  }`,
                }}
                src={`/src/assets/img/${props.resultForSurvey[1].image_archetype[0]}`}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 220,
                  height: 100,
                  backgroundColor: `${props.resultForSurvey[1].group_archetype.color}`,
                  opacity: 0.53,
                  zIndex: -1,
                  borderTopLeftRadius: 30,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              fontSize: 12,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 30,
            }}
          >
            <View style={{ marginRight: 20 }}>
              <Image
                style={{
                  width: 200,
                  marginLeft: 20,
                  marginTop: `${
                    props.resultForSurvey[1].category_id == 132 ? 25 : 0
                  }`,
                }}
                src={`/src/assets/img/${props.resultForSurvey[1].image_archetype[1]}`}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 220,
                  height: 100,
                  backgroundColor: `${props.resultForSurvey[1].group_archetype.color}`,
                  opacity: 0.53,
                  zIndex: -1,
                  borderTopRightRadius: 30,
                }}
              ></View>
            </View>
            <View style={{ width: 315, marginTop: 15, fontSize: 9 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: `${props.resultForSurvey[1].group_archetype.color}`,
                  marginBottom: 10,
                }}
              >
                Aspectos más importantes:
              </Text>
              <View
                style={{
                  marginTop: 5,
                  flexDirection: 'column',
                  gap: 10,
                  color: '#404040',
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 9,
                    paddingVertical: 9,
                    backgroundColor: '#fcfafa',
                    borderRadius: 10,
                  }}
                >
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>{'Su meta: '}</Text>
                    {props.resultForSurvey[1].characteristics[0]}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 9,
                    paddingVertical: 9,
                    backgroundColor: '#fcfafa',
                    borderRadius: 10,
                  }}
                >
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>
                      {'Su mayor temor: '}
                    </Text>
                    {props.resultForSurvey[1].characteristics[1]}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 9,
                    paddingVertical: 9,
                    backgroundColor: '#fcfafa',
                    borderRadius: 10,
                  }}
                >
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>
                      {'Su punto débil: '}
                    </Text>
                    {props.resultForSurvey[1].characteristics[2]}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 9,
                    paddingVertical: 9,
                    backgroundColor: '#fcfafa',
                    borderRadius: 10,
                  }}
                >
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>
                      {'Sus talentos: '}
                    </Text>
                    {props.resultForSurvey[1].characteristics[3]}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#013552',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            color: 'white',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            flexDirection: 'row',
            fontSize: 12,
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 25,
          }}
        >
          <View style={{ flexDirection: 'row', gap: 3 }}>
            <Text style={{ fontSize: 11, fontWeight: 'medium' }}>
              Reporte de Resultados
            </Text>
            <Text style={{ fontWeight: 'bold' }}>VOCATIO</Text>
          </View>
          <Text style={{ fontWeight: 'medium' }}>2023</Text>
        </View>
      </Page>
      <Page size="A4" style={{ ...styles.page, paddingHorizontal: 0 }}>
        <View style={{ width: '100%', display: 'flex', paddingHorizontal: 20 }}>
          <Image
            style={{ width: 45, alignSelf: 'flex-end', opacity: 0.1 }}
            src={'/src/assets/img/image.png'}
          />
        </View>
        <View>
          <View
            style={{
              borderBottom: 3,
              borderColor: '#013552',
              marginHorizontal: 40,
              marginTop: 10,
              paddingBottom: 10,
            }}
          >
            <Text>Tercer Arquetipo:</Text>
            <Text
              style={{ color: '#013552', fontWeight: 'bold', fontSize: 30 }}
            >
              {`${props.resultForSurvey[2].archetype} `}
              <Text style={{ fontWeight: 'normal' }}>
                ({props.resultForSurvey[2].concept})
              </Text>
            </Text>
          </View>
          <View
            style={{
              fontSize: 12,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 30,
            }}
          >
            <View style={{ width: 315, marginTop: 15 }}>
              <View
                style={{
                  paddingVertical: 8,
                  paddingLeft: 8,
                  backgroundColor: `${props.resultForSurvey[2].group_archetype.color}`,
                  borderTopRightRadius: 15,
                  color: 'white',
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>
                  Motivación o deseo principal en la vida:
                </Text>
                <Text>{props.resultForSurvey[2].group_archetype.hero}</Text>
              </View>
              <View style={{ marginTop: 5, paddingLeft: 10 }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: `${props.resultForSurvey[2].group_archetype.color}`,
                    marginVertical: 20,
                    fontSize: 12,
                  }}
                >
                  Definición:
                </Text>
                <Text
                  style={{
                    textAlign: 'justify',
                    lineHeight: 1.4,
                    fontSize: 11,
                    color: '#595959',
                  }}
                >
                  {props.resultForSurvey[2].definition}
                </Text>
              </View>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Image
                style={{
                  width: 200,
                  marginRight: 20,
                  marginTop: `${
                    props.resultForSurvey[2].category_id == 132 ? 25 : 0
                  }`,
                }}
                src={`/src/assets/img/${props.resultForSurvey[2].image_archetype[0]}`}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 220,
                  height: 100,
                  backgroundColor: `${props.resultForSurvey[2].group_archetype.color}`,
                  opacity: 0.53,
                  zIndex: -1,
                  borderTopLeftRadius: 30,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              fontSize: 12,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 30,
            }}
          >
            <View style={{ marginRight: 20 }}>
              <Image
                style={{
                  width: 200,
                  marginLeft: 20,
                  marginTop: `${
                    props.resultForSurvey[2].category_id == 132 ? 25 : 0
                  }`,
                }}
                src={`/src/assets/img/${props.resultForSurvey[2].image_archetype[1]}`}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 220,
                  height: 100,
                  backgroundColor: `${props.resultForSurvey[2].group_archetype.color}`,
                  opacity: 0.53,
                  zIndex: -1,
                  borderTopRightRadius: 30,
                }}
              ></View>
            </View>
            <View style={{ width: 315, marginTop: 15, fontSize: 9 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: `${props.resultForSurvey[2].group_archetype.color}`,
                  marginBottom: 10,
                }}
              >
                Aspectos más importantes:
              </Text>
              <View
                style={{
                  marginTop: 5,
                  flexDirection: 'column',
                  gap: 10,
                  color: '#404040',
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 9,
                    paddingVertical: 9,
                    backgroundColor: '#fcfafa',
                    borderRadius: 10,
                  }}
                >
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>{'Su meta: '}</Text>
                    {props.resultForSurvey[2].characteristics[0]}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 9,
                    paddingVertical: 9,
                    backgroundColor: '#fcfafa',
                    borderRadius: 10,
                  }}
                >
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>
                      {'Su mayor temor: '}
                    </Text>
                    {props.resultForSurvey[2].characteristics[1]}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 9,
                    paddingVertical: 9,
                    backgroundColor: '#fcfafa',
                    borderRadius: 10,
                  }}
                >
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>
                      {'Su punto débil: '}
                    </Text>
                    {props.resultForSurvey[2].characteristics[2]}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 9,
                    paddingVertical: 9,
                    backgroundColor: '#fcfafa',
                    borderRadius: 10,
                  }}
                >
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>
                      {'Sus talentos: '}
                    </Text>
                    {props.resultForSurvey[2].characteristics[3]}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#013552',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            color: 'white',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            flexDirection: 'row',
            fontSize: 12,
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 25,
          }}
        >
          <View style={{ flexDirection: 'row', gap: 3 }}>
            <Text style={{ fontSize: 11, fontWeight: 'medium' }}>
              Reporte de Resultados
            </Text>
            <Text style={{ fontWeight: 'bold' }}>VOCATIO</Text>
          </View>
          <Text style={{ fontWeight: 'medium' }}>2023</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={{ width: '100%', display: 'flex' }}>
          <Image
            style={{
              width: 55,
              alignSelf: 'flex-end',
              marginTop: 20,
              marginRight: 10,
            }}
            src={'/src/assets/img/logo_principal_color.png'}
          />
        </View>
        <View style={{ paddingHorizontal: 15, marginTop: 90 }}>
          <View style={{ borderBottom: 3, borderColor: '#013552' }}>
            <Text
              style={{ color: '#013552', fontWeight: 'bold', fontSize: 25 }}
            >
              {
                'Estos son los tres arquetipos\nde personalidad con los\nque mejor te identificas.'
              }
            </Text>
          </View>
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
                src={'/src/assets/img/carl_jung.png'}
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
                  propio corazón. Quien mira hacia afuera, sueña; quien mira
                  hacia adentro, despierta”.{' '}
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
        <View
          style={{
            backgroundColor: '#013552',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            color: 'white',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            flexDirection: 'row',
            fontSize: 12,
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 25,
          }}
        >
          <View style={{ flexDirection: 'row', gap: 3 }}>
            <Text style={{ fontSize: 11, fontWeight: 'medium' }}>
              Reporte de Resultados
            </Text>
            <Text style={{ fontWeight: 'bold' }}>VOCATIO</Text>
          </View>
          <Text style={{ fontWeight: 'medium' }}>2023</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PdfDocumentArquetipos;
