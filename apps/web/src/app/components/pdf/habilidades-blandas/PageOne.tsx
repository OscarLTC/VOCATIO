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
          marginTop: 25,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{ width: 520 }}
          src={'/src/assets/img/portada_arquetipos.png'}
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
