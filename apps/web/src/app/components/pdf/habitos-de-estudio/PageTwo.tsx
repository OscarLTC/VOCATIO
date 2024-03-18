import { Page, Text, View } from '@react-pdf/renderer';
import { DocumentsFooter } from '../DocumentsFooter';
import { TitlePdf } from '../Title';
import { CardVar, CardVarProps } from '../CardVar';

export const PageTwo = () => {
  const habits: Omit<CardVarProps, 'color'>[] = [
    {
      title: 'A. Condiciones ambientales',
      description:
        'Un  adecuado  lugar  de  estudio debe  contar   con   las   condiciones   necesarias que    faciliten    la    actitud,   motivación  y calidad  de  estudio  que realice  el estudiante.  Es  decir,  detalles  como  la  iluminación,  ventilación y orden del lugar; así como aminorar la incidencia de ruidos y/o estímulos distractores. Éstas condiciones en general, se convierten en una buena forma de apoyar y favorecer las condiciones de estudio.',
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
            gap: 15,
            textAlign: 'justify',
            lineHeight: 2,
          }}
        >
          <Text>
            {`El saber estudiar es un arte, y cada persona lo realiza de acuerdo a su propio estilo, el mismo que ha elaborado a lo largo de su vida, desde muy temprana edad.`}
          </Text>
          <Text>
            {`El estudio es un proceso que permite a los estudiantes incorporar nuevos conocimientos a su intelecto, permitiéndoles una visión más amplia del mundo y por ende, tener mayores posibilidades de encontrar soluciones a problemas de diferente índole.`}
          </Text>
          <Text>
            {`Por su parte, los hábitos de estudio son una serie de conductas, que se adquieren en relación al aprendizaje de  contenidos  académicos, presentes  de  manera intensa a lo largo de la vida escolar, universitaria e incluso laboral.`}
          </Text>
          <Text>
            {`Los hábitos de estudio llegan a adquirirse con constancia y perseverancia, ya que la mente debe organizarse para ejecutar  una  serie  de  funciones  previas  al aprendizaje.`}
          </Text>
          <Text>
            {`Las variables a considerarse dentro de este proceso son las siguientes:`}
          </Text>
          {habits.map((skill, index) => (
            <CardVar
              key={index}
              color="#4a77da"
              fontSize={11}
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
