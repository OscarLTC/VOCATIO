import { Page, Text, View } from '@react-pdf/renderer';
import { DocumentsFooter } from '../DocumentsFooter';
import { LogoFooter } from '../LogoFooter';
import { CardVar, CardVarProps } from '../CardVar';

export const PageFour = () => {
  const habits: Omit<CardVarProps, 'color'>[] = [
    {
      title: 'F. Técnicas de estudio',
      description:
        'Están   dirigidas   a   facilitar   el   entendimiento,   comprensión   y   asimilación de información  nueva,  proporciona  herramientas  con  procedimientos sencillos, mejorando el entendimiento de temas complejos o de mucha información, estas técnicas te servirán de apoyo para el aprendizaje, obteniendo mejores resultados.',
    },
    {
      title: 'G. Realización de tareas',
      description:
        'La realización de tareas supone una actividad importante para la consolidación de la información y del aprendizaje que busca lograr el docente en el estudiante. Por lo que realizarla supone una preparación, análisis, ejecución y entrega de un producto que cumpla con los objetivos establecidos en la enseñanza.',
    },
    {
      title: 'H. Respuesta frente a exámenes',
      description:
        'La respuesta frente a exámenes puede  variar  en  función  a  cómo  percibe  el estudiante esta acción, si lo ve con mucha dificultad, será una amenaza evidente que generará una respuesta emocional ansiosa pudiendo interferir en los resultados del estudiante. Es por ello necesario poner especial atención a cómo concebimos los exámenes, ya que estos son en todos los casos importantes y rutinarios para la valoración del docente y del propio estudiante de su desempeño académico.',
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
      <View style={{ paddingHorizontal: 35, marginTop: 30 }}>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'column',
            fontWeight: 'light',
            fontSize: 12,
            gap: 10,
            textAlign: 'justify',
            lineHeight: 2,
          }}
        >
          {habits.map((habit, index) => (
            <CardVar
              key={index}
              color="#4a77da"
              fontSize={11}
              title={habit.title}
              description={habit.description}
            />
          ))}
          <Text
            style={{
              marginTop: 40,
            }}
          >
            {
              'El  presente reporte te ayudará a ver  el  nivel  alcanzado  por  cada  una  de las categorías, sirviéndote para determinar cuáles son las variables que necesitas mejorar para realizar un mejor trabajo académico. '
            }
          </Text>
          <Text
            style={{
              marginTop: 20,
            }}
          >
            {
              'A continuación, tus resultados, en base a las respuestas que brindaste:'
            }
          </Text>
        </View>
      </View>
      <LogoFooter />
      <DocumentsFooter />
    </Page>
  );
};
