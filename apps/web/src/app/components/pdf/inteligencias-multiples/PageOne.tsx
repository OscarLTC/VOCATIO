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
        fontFamily: 'Poppins',
        color: '#434343',
      }}
    >
      <MainHeader
        title={'Test de Inteligencias\nMúltiples'}
        subtitle="(Basado en la teoría de Howard Gardner)"
      />
      <View
        style={{
          marginTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{ width: 400 }}
          src={'/src/assets/img/intelligences/cover_image.png'}
        />
      </View>
      <MainFooter
        person={props.person}
        surveyProgramming={props.surveyProgramming}
      />
    </Page>
  );
};
