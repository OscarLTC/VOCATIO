import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import { Answer } from '../../../models/answer.model';
import { Person } from '../../../models/person.model';
import { ResultTypeSix } from '../../../models/result.model';
import { SurveyProgramming } from '../../../models/surveyProgramming.model';
import { formatDate, getCustomDate } from '../../../utils/dateUtils';

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

interface PdfDocumentGeneralProps {
  imageURL: string;
  person: Person;
  surveyProgramming: SurveyProgramming;
  answers: Answer[];
  endDate: string;
  maxIndexSurvey?: number;
  resultForSurvey: ResultTypeSix;
}

export const PdfDocumentGeneral = (props: PdfDocumentGeneralProps) => {
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

          <Image
            style={{
              marginTop: '20px',
              width: '400px',
              marginHorizontal: 'auto',
            }}
            src={props.imageURL}
          />
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
    </Document>
  );
};
