import { Image, Page, View } from '@react-pdf/renderer';
import { MainFooter } from '../MainFooter';
import { MainHeader } from '../MainHeader';

interface PageOneProps {
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
      <MainHeader title={'Test de Habilidades\nBlandas'} />
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{ width: 480 }}
          src={'/src/assets/img/skills/cover_image.png'}
        />
      </View>
      <MainFooter
        person={props.person}
        surveyProgramming={props.surveyProgramming}
      />
    </Page>
  );
};
