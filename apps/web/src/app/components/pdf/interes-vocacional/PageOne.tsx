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
      <MainHeader title={'Test de Intereses\nVocacionales'} />
      <View
        style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{ width: 450 }}
          src={'/src/assets/img/interest/cover_image.png'}
        />
      </View>
      <MainFooter
        person={props.person}
        surveyProgramming={props.surveyProgramming}
      />
    </Page>
  );
};
