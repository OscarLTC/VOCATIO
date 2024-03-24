import { Page, Text, View } from '@react-pdf/renderer';
import { DocumentsFooter } from '../DocumentsFooter';
import { CardInterest } from './CardInterest';
import { CardTinyView, CardTinyViewProps } from './CardTinyView';

export const PageThree = () => {
  const interests: CardTinyViewProps[] = [
    {
      color: '#1a49d4',
      title: 'Preferencia Vocacional',
      description: '¿Esta  actividad  responde a mi interés?',
    },
    {
      color: '#0a937c',
      title: 'Personalidad',
      description: '¿Esta actividad va acorde a mi manera de ser?',
    },
    {
      color: '#e37047',
      title: 'Autoconfianza',
      description: '¿Esta  actividad  me  ayudaría a explotar mi potencial?',
    },
    {
      color: '#ed8caa',
      description: '¿Esta actividad responde a mis expectativas?',
      title: 'Visión del futuro',
    },
  ];

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
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: '#f2f2f2',
              borderRadius: 20,
              borderBottomWidth: 1,
              borderRightWidth: 1,
              borderColor: '#b5b5b5',
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 11,
                lineHeight: 2,
                textAlign: 'left',
              }}
            >
              {
                'El adolescente tomará en cuenta las opiniones de su entorno, especialmente de personas importantes para él, como son sus familiares, maestros, etc. pudiendo entrar en el conflicto de seguir de acuerdo a sus preferencias vocacionales o a elegir lo que los demás deseen o creen que es más conveniente para él.'
              }
            </Text>
          </View>
          <CardInterest
            color="#e37047"
            description={
              'Esta etapa es la definitoria. El adolescente se hace consciente de lo que puede y quiere. Se logra identificar con una carrera luego de valorar el éxito o fracaso en ella y se da inicio a los estudios superiores.'
            }
            title="3. Etapa Realista (de los 18 años en adelante)"
          />
          <Text style={{ marginTop: 20 }}>
            {
              'Es importante indicar que las edades propuestas por los autores son referenciales y están basadas en etapas escolares.'
            }
          </Text>
          <Text>
            {
              'El presente reporte tiene como finalidad mostrar el nivel de tu interés vocacional sobre los 21 grupos vocacionales, para centrarnos en los más sobresalientes de acuerdo a tus resultados.'
            }
          </Text>
          <Text>
            {'Para esto se han tomado en cuenta cuatro aspectos importantes:'}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: 10,
              marginTop: 20,
            }}
          >
            {interests.map((interest, index) => (
              <CardTinyView
                key={index}
                color={interest.color}
                description={interest.description}
                title={interest.title}
              />
            ))}
          </View>
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
