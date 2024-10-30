import { Page, Text, View } from '@react-pdf/renderer';
import { TitlePdf } from '../Title';
import { InterestData, InterestDataProps } from './InterestData';
import { DocumentsFooter } from '../DocumentsFooter';
import { LogoFooter } from '../LogoFooter';

export const PageSix = (props: InterestDataProps) => {
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
        <TitlePdf title="Grupos vocacionales de interés" />
        <View
          style={{
            paddingVertical: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
              color: '#0a3552',
            }}
          >
            Área de interés muy alto:
          </Text>
          <InterestData {...props} />
        </View>
      </View>
      <LogoFooter />
      <DocumentsFooter />
    </Page>
  );
};
