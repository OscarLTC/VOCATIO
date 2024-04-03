import { Image, Page, View } from '@react-pdf/renderer';
import { MainFooter } from '../MainFooter';
import { MainHeader } from '../MainHeader';

export interface PageOneProps {
  person: {
    name: string;
    lastName: string;
  };
  surveyProgramming: {
    section: string;
    endDate: string;
  };
}

export const PageOne = (props: PageOneProps) => {
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
      <MainHeader
        title={'Test de Arquetipos\nde Personalidad'}
        subtitle="(Basado en la teoría de Carl Jung)"
      />
      <View
        style={{
          marginTop: 25,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{ width: 520 }}
          src={'/src/assets/img/archetypes/cover_image.png'}
        />
      </View>
      <MainFooter
        person={props.person}
        surveyProgramming={props.surveyProgramming}
      />
    </Page>
  );
};
