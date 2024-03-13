import { Image, Page, View } from '@react-pdf/renderer';
import { MainFooter } from '../MainFooter';
import { MainHeader } from '../MainHeader';

export const PageOne = () => {
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
        person={{
          name: 'Javier',
          lastName: 'Vargas Ordinola',
        }}
        surveyProgramming={{
          section: '4to de secundaria',
          endDate: '2024-04-05',
        }}
      />
    </Page>
  );
};
