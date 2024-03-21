import { Page, Text, View } from '@react-pdf/renderer';
import { DocumentsFooter } from '../DocumentsFooter';
import { TitlePdf } from '../Title';
import { CardVar, CardVarProps } from '../CardVar';
import { CardIntelligence, CardIntelligenceProps } from './CardIntelligence';

export const PageTwo = () => {
  const intelligences: CardIntelligenceProps[] = [
    {
      intelligence: 'Lingüístico -\nVerbal',
      image: 'linguistico_verbal',
    },
    {
      intelligence: 'Lógico -\nMatemática',
      image: 'logico_matematico',
    },
    {
      intelligence: 'Kinestésica -\nCorporal',
      image: 'kinestesica',
    },
    {
      intelligence: 'Musical',
      image: 'musical',
    },
    {
      intelligence: 'Visual - Espacial',
      image: 'visual_espacial',
    },
    {
      intelligence: 'Naturalista',
      image: 'natural',
    },
    {
      intelligence: 'Interpersonal',
      image: 'interpersonal',
    },
    {
      intelligence: 'Intrapersonal',
      image: 'intrapersonal',
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
            {`Una de las teorías mejor fundadas es la teoría de las inteligencias múltiples de Howard Gardner, quién define la inteligencia como el conjunto de capacidades que nos permite resolver problemas o fabricar  productos  valiosos  en nuestra cultura. Gardner define 8 grandes tipos de capacidades o inteligencias, según el contexto de producción:`}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginTop: 5,
              gap: 10,
            }}
          >
            {intelligences.map((skill, index) => (
              <CardIntelligence
                key={index}
                image={skill.image}
                intelligence={skill.intelligence}
              />
            ))}
          </View>
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
