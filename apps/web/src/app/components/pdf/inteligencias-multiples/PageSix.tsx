import { Image, Link, Page, Text, View } from '@react-pdf/renderer';
import { DocumentsFooter } from '../DocumentsFooter';
import { LogoFooter } from '../LogoFooter';
import { SubtitleIntelligence } from './SubtitleIntelligence';

export interface PageSixProps {
  text1: string;
  text2: string;
}

export const PageSix = (props: PageSixProps) => {
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
        <View
          style={{
            fontSize: 12,
            paddingHorizontal: 20,
            marginTop: 15,
            flexDirection: 'column',
            fontWeight: 'light',
            gap: 20,
            textAlign: 'justify',
            lineHeight: 2,
          }}
        >
          <View style={{ flexDirection: 'column', gap: 10 }}>
            <View style={{ width: 400 }}>
              <SubtitleIntelligence
                subtitle={
                  '¿Quiénes poseen usualmente este\ntipo de inteligencia?'
                }
              />
            </View>
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: '#f2f2f2',
                borderRadius: 10,
                borderBottomWidth: 1,
                borderRightWidth: 1,
                borderColor: '#b5b5b5',
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  lineHeight: 1.2,
                  textAlign: 'left',
                }}
              >
                {props.text1}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'column', gap: 10 }}>
            <View style={{ width: 400 }}>
              <SubtitleIntelligence
                subtitle={
                  '¿Qué hacer para potenciar este\ntipo de inteligencia?'
                }
              />
            </View>
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: '#f2f2f2',
                borderRadius: 10,
                borderBottomWidth: 1,
                borderRightWidth: 1,
                borderColor: '#b5b5b5',
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  lineHeight: 1.2,
                  textAlign: 'left',
                }}
              >
                {props.text2}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
