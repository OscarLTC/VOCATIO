import { Page, View } from '@react-pdf/renderer';
import { InterestData, InterestDataProps } from './InterestData';
import { DocumentsFooter } from '../DocumentsFooter';

export const PageEight = (props: InterestDataProps) => {
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
          <InterestData {...props} />
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
