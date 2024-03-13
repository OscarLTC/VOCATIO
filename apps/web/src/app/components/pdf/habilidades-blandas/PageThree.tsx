import { Page, View } from '@react-pdf/renderer';
import { CardHabilidades } from './CardHabilidades';
import { DocumentsFooter } from '../DocumentsFooter';

export const PageThree = () => {
  const abilities: Array<{ title: string; content: string }> = [
    {
      title: '3. Comunicación',
      content:
        'Se   define  como  un medio  natural en  que   la   expresión   verbal, gestual, y  de entonación, permiten dirigir el diálogo hacia un propósito, es expresar  ideas, conocimientos, en algunos    casos    es  esencial  para el  debate, resolución de conflictos y establecer acuerdos  concordantes  con   una  situación.  La comunicación es la base de la interacción y de la convivencia social.',
    },
    {
      title: '4.Resolución de conflictos',
      content:
        'Es la habilidad que se aplica al identificar un problema y se hacen uso de variadas estrategias para resolver, se pone en práctica ideas, sentimientos y procedimientos, que en su conjunto buscan soluciones eficaces',
    },
    {
      title: '5. Gestión del tiempo',
      content:
        'Son las habilidades dirigidas a las acciones de planificación y programación, estableciendo prioridades para gestionar horarios en tareas cotidianas, en donde hay un balance entre los deberes y los placeres, que cada persona es capaz de desarrollar',
    },
    {
      title: '6. Habilidades organizativas',
      content:
        'Se aplica con la intención de dirigir las  actividades  rutinarias de  manera funcional, incorporando estrategias como medios materiales que ayuden en el cumplimento de tareas.',
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
          {abilities.map((ability, index) => (
            <CardHabilidades
              key={index}
              title={ability.title}
              description={ability.content}
            />
          ))}
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
