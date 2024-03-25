import { Page, View } from '@react-pdf/renderer';
import { TitlePdf } from '../Title';
import { InterestChart, InterestChartProps } from './InterestChart';
import { DocumentsFooter } from '../DocumentsFooter';

export const interests: InterestChartProps['interests'] = [
  {
    title: 'Ciencias puras / experimentales',
    percentage: 85,
    color: '#1a49d4',
  },
  {
    title: 'Cálculo',
    percentage: 75,
    color: '#0a937c',
  },
  {
    title: 'Ciencias tecnológicas',
    percentage: 65,
    color: '#e37047',
  },
  {
    title: 'Recursos naturales:\nAgropecuario - Ambiental',
    percentage: 35,
    color: '#404040',
  },
  {
    title: 'Fuerzas armadas - Seguridad',
    percentage: 35,
    color: '#9f9f9f',
  },
  {
    title: 'Ciencias de la salud',
    percentage: 25,
    color: '#202020',
  },
  {
    title: 'Mecánica y transformación',
    percentage: 25,
    color: '#c1c1c1',
  },
  {
    title: 'Ciencias social / humanidades',
    percentage: 15,
    color: '#606060',
  },
  {
    title: 'Empresarial / administrativo',
    percentage: 15,
    color: '#000000',
  },
  {
    title: 'Ciencias del deporte',
    percentage: 10,
    color: '#dfdfdf',
  },
  {
    title: 'Ciencias políticas / jurídico social',
    percentage: 5,
    color: '#818181',
  },
  {
    title: 'Comunicaciones',
    percentage: 5,
    color: '#404040',
  },
  {
    title: 'Psicopedagogía',
    percentage: 5,
    color: '#9f9f9f',
  },
  {
    title: 'Artístico, plástico - moda',
    percentage: 5,
    color: '#202020',
  },
  {
    title: 'Artístico musical',
    percentage: 5,
    color: '#bfbfbf',
  },
  {
    title: 'Turismo y hotelería',
    percentage: 5,
    color: '#606060',
  },
  {
    title: 'Artístico literario',
    percentage: 5,
    color: '#000000',
  },
  {
    title: 'Artístico actoral',
    percentage: 5,
    color: '#dfdfdf',
  },
  {
    title: 'Religioso - filosófico',
    percentage: 5,
    color: '#808080',
  },
  {
    title: 'Idiomas',
    percentage: 5,
    color: '#404040',
  },
  {
    title: 'Veterinaria',
    percentage: 5,
    color: '#9f9f9f',
  },
];

export const PageFive = (props: InterestChartProps) => {
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
        <TitlePdf title="Resultados" />
        <InterestChart interests={props.interests} />
      </View>
      <DocumentsFooter />
    </Page>
  );
};
