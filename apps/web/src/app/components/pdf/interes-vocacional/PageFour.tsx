import { Page, Text, View } from '@react-pdf/renderer';
import { DocumentsFooter } from '../DocumentsFooter';
import { TableLevels } from './TableLevels';

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
      <View style={{ paddingHorizontal: 35, marginTop: 50 }}>
        <View
          style={{
            fontSize: 12,
            paddingHorizontal: 20,
            marginTop: 15,
            flexDirection: 'column',
            fontWeight: 'light',
            gap: 10,
            textAlign: 'justify',
            lineHeight: 1.5,
          }}
        >
          <View style={{ borderBottom: 3, borderColor: '#013552' }}>
            <Text
              style={{
                color: '#013552',
                fontWeight: 'bold',
                fontSize: 25,
                paddingLeft: 10,
              }}
            >
              {'Interpretación de resultados'}
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              marginTop: 10,
              gap: 20,
            }}
          >
            <Text>
              {
                'De acuerdo a tus respuestas, se ha elaborado una tabla de resultados en la cual encontrarás, todas las áreas evaluadas con sus respectivos puntajes de acuerdo al nivel de interés que presentas.'
              }
            </Text>
            <Text>{'Existiendo 5 niveles:'}</Text>
            <TableLevels />
            <Text style={{ marginTop: 20 }}>
              {
                'Posteriormente, encontrarás sólo la descripción del área de interés y las carreras que correspondan, cuyos puntajes se hayan ubicado en el rango de alto y/o muy alto, pues son los que evidencian una preferencia vocacional significativa.'
              }
            </Text>
            <Text>
              {
                'De no contarse con algún puntaje por encima del nivel medio, sería inoportuno recomendar un área vocacional o carrera, pues la elección de una carrera debe realizarse con un nivel de confianza alto.'
              }
            </Text>
            <Text>
              {
                'A continuación, la gráfica de resultados y su detallada explicación.  '
              }
            </Text>
          </View>
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
