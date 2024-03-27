import { Page, Text, View } from '@react-pdf/renderer';
import { InterestData, InterestDataProps } from './InterestData';
import { DocumentsFooter } from '../DocumentsFooter';

export const PageSeven = (props: InterestDataProps) => {
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
      <View style={{ paddingHorizontal: 35, marginTop: 100 }}>
        <View
          style={{
            paddingVertical: 10,
            marginTop: 20,
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
            Área de interés alto:
          </Text>
          <InterestData {...props} />
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
