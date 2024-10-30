import { Page, Text, View } from '@react-pdf/renderer';
import { LogoHeader } from './LogoHeader';
import { TitlePdf } from '../Title';
import { CardArchetype } from './CardArchetype';
import { DocumentsFooter } from '../DocumentsFooter';

export const PageTwo = () => {
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
        <LogoHeader />
        <TitlePdf title="Presentación" />
        <View
          style={{
            fontSize: 10.5,
            marginTop: 15,
            lineHeight: 1.5,
            textAlign: 'justify',
            flexDirection: 'column',
            gap: 10,
            paddingHorizontal: 20,
          }}
        >
          <Text>
            {
              'La palabra "arquetipo" proviene del griego "arjé",  que significa fuente,  principio u origen y de "tipos"  que significa modelos.  Es decir,  ambos términos conjuntamente significarán  algo así como:'
            }
            <Text style={{ marginLeft: 8, fontWeight: 'bold' }}>
              {' modelo original o patrón único.'}
            </Text>
          </Text>
          <Text>
            Según <Text style={{ fontWeight: 'bold' }}>Carl G. Jung </Text>
            {
              ' existe un sistema de 12  arquetipos  dentro  de cada persona,  es decir,  que cada uno de nosotros  tiene su  propia rueda de 12 arquetipos. Unos afloran en mayor o menor grado, dependiendo de las circunstancias de la vida.'
            }
          </Text>
          <Text>
            {
              'Los arquetipos de Jung son modelos de pensar, sentir y actuar los cuales están presentes en todas las culturas y civilizaciones.'
            }
          </Text>
          <Text>
            {
              'De esos arquetipos obtenemos información útil para entender quiénes somos y cómo actuamos.'
            }
          </Text>
          <Text>
            {
              'Los 12 arquetipos se desprenden 4 categorías que abarcan las principales motivaciones o deseos en la vida de un ser humano, a través de las cuales se manifiestan en la sociedad:'
            }
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <CardArchetype
            index={1}
            title="CATEGORÍA: PROMOVER ESTRUCTURA AL MUNDO (ORDEN)"
            color="#dd6e4b"
            data={[
              {
                title: 'El Control',
                description:
                  'Buscan crear una familia o comunidad próspera y exitosa. Arquetipo: El Gobernante.',
                letter: 'a',
              },
              {
                title: 'La Innovación',
                description:
                  'Buscan crear cosas de valor duradero para los demás. Arquetipo: El Creador',
                letter: 'b',
              },
              {
                title: 'El Servicio',
                description:
                  'Buscan proteger y hacerse cargo de las necesidades de otro. Arquetipo: El Cuidador.',
                letter: 'c',
              },
            ]}
          />
          <CardArchetype
            index={2}
            title="CATEGORÍA: CONECTAR CON OTROS (SOCIAL)"
            color="#ed8caa"
            data={[
              {
                title: 'La Intimidad',
                description:
                  'Buscan estar en una relación armónica con las personas, el trabajo y el entorno que los rodea. Arquetipo: El Amante.',
                letter: 'a',
              },
              {
                title: 'La Pertenencia',
                description:
                  'Buscan pertenecer o formar parte de un grupo o familia. Arquetipo: El Amigo.',
                letter: 'b',
              },
              {
                title: 'La Diversión',
                description:
                  'Buscan aligerar la carga y hacer sentir bien a los demás. Arquetipo: El Bromista.',
                letter: 'c',
              },
            ]}
          />
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
