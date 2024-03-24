import { Page, Text, View } from '@react-pdf/renderer';
import { DocumentsFooter } from '../DocumentsFooter';
import { TitlePdf } from '../Title';
import { CardVar } from '../CardVar';
import { CardInterest, CardInterestProps } from './CardInterest';

export const PageTwo = () => {
  const interests: CardInterestProps[] = [
    {
      title: '1. Etapa Fantasía (antes de los 11 años)',
      description:
        'La  interacción  con  el  mundo  es  más lúdica y se tiene una idea vaga de sus recursos y habilidades, así como del tiempo. Su deseo está conectado al ejemplo de sus padres o de personajes que están  de moda.  Se  dedican  a vivir en el presente y ven el futuro como algo muy lejano.',
      color: '#1a49d4',
    },
    {
      title: '2. Etapa Tentativo (de los 11 a los 18 años)',
      description:
        'La  idea  de  la  realidad  es  limitada,  sin  embargo,  durante la adolescencia empiezan a sentir la presión por elegir una carrera o área vocacional. En esta etapa el adolescente explora sus intereses para establecer un punto de partida, para luego tomar en cuenta sus capacidades, para confrontarlos con su escala de valores, eligiendo el valor con el que más conecte: valor social, valor científico, valor económico, etc.',
      color: '#0a937c',
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
        <TitlePdf title="Presentación" />
        <View
          style={{
            fontSize: 12,
            paddingHorizontal: 20,
            marginTop: 15,
            flexDirection: 'column',
            fontWeight: 'light',
            gap: 20,
            textAlign: 'justify',
            lineHeight: 2,
          }}
        >
          <Text>
            {`El término vocación deriva de la palabra en latín “vocatio”, que significa invitación o llamado.`}
          </Text>
          <Text>
            {`De  acuerdo  a  la  Teoría de elección  vocacional  de  `}
            <Text style={{ fontWeight: 'bold' }}>Ginsburg</Text>
            {`,  el  desarrollo vocacional es un proceso que implica una serie de etapas claramente marcadas y que culmina con la elección de una carrera o profesión, momento en el que el individuo adquiere una serie de compromisos, en función a sus `}
            <Text style={{ fontWeight: 'bold' }}>DESEOS</Text>
            {` y sus `}
            <Text style={{ fontWeight: 'bold' }}>POSIBILIDADES</Text>
            {`.`}
          </Text>
          <Text>
            {`Para  `}
            <Text style={{ fontStyle: 'italic' }}>
              Ginzberg, Ginsburg, Axelrad y Herma,
            </Text>
            {` el  proceso  vocacional  inicia  en  la infancia y se divide en tres etapas:`}
          </Text>
          {interests.map((interest, index) => (
            <CardInterest
              key={index}
              color={interest.color}
              title={interest.title}
              description={interest.description}
            />
          ))}
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
