import { Page, Text, View } from '@react-pdf/renderer';
import { DocumentsFooter } from '../DocumentsFooter';
import { TitlePdf } from '../Title';
import { CardVar, CardVarProps } from '../CardVar';

export const PageTwo = () => {
  const skills: Omit<CardVarProps, 'color'>[] = [
    {
      title: '1. Liderazgo',
      description:
        'Se  refiere  a  las habilidades  que  se  ponen  en  práctica  para  el  logro  de objetivos  y  metas,  se relaciona  con dirigir,  delegar, gestionar,  promover, motivar, convocar y evaluar las condiciones y resultados de una determinada tarea.',
    },
    {
      title: '2. Trabajo en equipo',
      description:
        'Relacionado   a   la   capacidad  de   constituirse   en   un  grupo   humano organizado,   que   poseen   habilidades  y  estrategias  necesarias  para desempeñar  determinada  gestión, demostrando proactividad en el logro de objetivos y metas.',
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
            gap: 10,
            textAlign: 'justify',
            lineHeight: 2,
          }}
        >
          <Text>
            {`Las habilidades blandas son un conjunto de competencias que están más allá de nuestros conocimientos teórico – académicos, Son atributos personales que nos permiten relacionarnos de manera efectiva con los demás, en los diferentes contextos en los que nos desenvolvemos.`}
          </Text>
          <Text>
            {`Las  habilidades  blandas  son  recursos  personales  intangibles  sumamente valiosos, que expresan nuestra individualidad como ser humano.`}
          </Text>
          <Text>
            {`Cabe   resaltar,   que    las   habilidades   blandas   pueden   ser   susceptibles  a estimularse y a mejorar con el  paso del tiempo. Para esto se requiere  un  buen nivel de autoconocimiento, así como una dosis  de inteligencia  emocional,  con una actitud abierta a un aprendizaje constante.`}
          </Text>
          <Text>
            {`Las habilidades blandas más importantes son las siguientes:`}
          </Text>
          {skills.map((skill, index) => (
            <CardVar
              color="#06917a"
              key={index}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
