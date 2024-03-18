import { Page, View } from '@react-pdf/renderer';
import { DocumentsFooter } from '../DocumentsFooter';
import { CardVar, CardVarProps } from '../CardVar';

export const PageThree = () => {
  const habits: Omit<CardVarProps, 'color'>[] = [
    {
      title: 'B. Condiciones físicas',
      description:
        'La salud física influye significativamente sobre los procesos cognitivos que permiten el  aprendizaje.  Enfermedades  no  curadas,   problemas  visuales  e  incluso  del musculares,   son   algunos  de  los   muchos   temas   que   generan  malestar, conllevando esto a sentir dolor, irritabilidad y distraer tu propósito de  estudio.  Por tanto,  si tu condición física está afectada, detecta el problema y busca ayuda para aliviar cualquier malestar de forma oportuna.',
    },
    {
      title: 'C. Motivación por el estudio',
      description:
        'El factor  motivacional  en el  ámbito  académico, supone  el  interés  genuino  del estudiante  hacia  la  acción  de aprender, siendo  resultado  de  factores internos , externos y sociales; que en su  conjunto impulsan al estudiante a conseguir sus metas académicas y mejorar su desempeño.',
    },
    {
      title: 'D. Actitud en clase',
      description:
        'Hace referencia a la disposición mental y conductual del estudiante hacia la clase o curso determinado, factores emocionales y sociales pueden interferir de manera positiva o negativa en el desenvolvimiento en el aula. También está relacionado a la valoración que tiene el estudiante a su docente y a sus compañeros de clase.',
    },
    {
      title: 'E. Planificación de actividades',
      description:
        'No  obedece  a  un  sistema  de  pasos  estructurados  a  seguir,  ya  que  no necesariamente va a ser funcional para todos. Cada persona tiene su propio estilo y conoce sus habilidades para organizarse; es decir que le favorece y/o dificulta de su actividad académica, ésta es una tarea inicial que el estudiante deberá evaluar para buscar organizarse y estructurar sus propios tiempos para cada actividad a ejecutar.',
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
            gap: 5,
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
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
