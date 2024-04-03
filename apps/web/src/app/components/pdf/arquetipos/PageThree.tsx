import { Page, Text, View } from '@react-pdf/renderer';
import { LogoHeader } from './LogoHeader';
import { DocumentsFooter } from '../DocumentsFooter';
import { CardArchetype } from './CardArchetype';

export const PageThree = () => {
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
        <View style={{ marginTop: 25, flexDirection: 'column', gap: 20 }}>
          <CardArchetype
            data={[
              {
                letter: 'a',
                title: 'La Maestría',
                description:
                  'Buscan proteger a los más débiles y defender a aquellos con quienes se cometen injusticias. Arquetipo: El Héroe.',
              },
              {
                letter: 'b',
                title: 'La Liberación',
                description:
                  'Buscan derribar todo aquello que sea obsoleto y no funcione. Arquetipo: El Rebelde.',
              },
              {
                letter: 'c',
                title: 'El Poder',
                description:
                  'Buscan inspirar a otros a través de su creatividad e ingenio. Arquetipo: El Mago.',
              },
            ]}
            color="#1b4ad4"
            index={3}
            title="CATEGORÍA: DEJAR UNA HUELLA EN EL MUNDO (EGO)"
          />
          <CardArchetype
            data={[
              {
                letter: 'a',
                title: 'El Conocimiento',
                description:
                  'Buscan usar la inteligencia para entender el mundo y enseñar a otros. Arquetipo: El Sabio.',
              },
              {
                letter: 'b',
                title: 'La Libertad',
                description:
                  'Buscan experimentar la mayor cantidad de vivencias posibles en una vida. Arquetipo: El Explorador.',
              },
              {
                letter: 'c',
                title: 'La Seguridad',
                description:
                  'Buscan generar un ambiente de felicidad para los que lo rodean haciendo frente a los problemas de manera sencilla. Arquetipo: El Inocente.',
              },
            ]}
            color="#0a937c"
            index={4}
            title="CATEGORÍA: PERSEGUIR LA ESPIRITUALIDAD Y LA REALIZACIÓN (LIBERTAD)"
          />
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
            El presente reporte tiene como finalidad mostrar la presencia de los{' '}
            <Text style={{ fontWeight: 'bold' }}>12 arquetipos</Text> de los que
            habla Jung, para centrarnos en los más sobresalientes dentro de tu
            personalidad.
          </Text>
          <Text>
            Los resultados te ayudarán a comprender quién eres, cómo interactúas
            con tu entorno, que es lo que motiva y que buscas en tus relaciones
            interpersonales.
          </Text>
          <Text>
            Conocer tu personalidad te ayudará a tomar mejores decisiones en tu
            vida y a comprender mejor a las personas.
          </Text>
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
