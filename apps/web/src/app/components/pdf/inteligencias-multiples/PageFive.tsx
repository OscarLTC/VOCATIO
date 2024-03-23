import { Fragment } from 'react';
import { DocumentsFooter } from '../DocumentsFooter';
import { TitleIntelligence } from './TitleIntelligence';
import { Image, Page, Text, View } from '@react-pdf/renderer';
import { SubtitleIntelligence } from './SubtitleIntelligence';

export interface PageFiveProps {
  title: string;
  image: string;
  description: string;
  indicators: string[];
}

export const PageFive = (props: PageFiveProps) => {
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
      <View style={{ paddingLeft: 45, marginTop: 30 }}>
        <TitleIntelligence title={props.title} />
      </View>
      <View
        style={{
          marginTop: 20,
          paddingLeft: 45,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            width: '50%',
          }}
        >
          <SubtitleIntelligence
            subtitle={'¿De qué se trata esta\ninteligencia?'}
          />
          <Text
            style={{
              marginTop: 10,
              textAlign: 'justify',
              fontSize: 11,
              lineHeight: 2,
              paddingHorizontal: 10,
            }}
          >
            {props.description}
          </Text>
        </View>
        <View
          style={{
            width: '45%',

            height: 200,
          }}
        >
          <Image
            style={{
              width: 200,
              height: 200,
            }}
            src={`/src/assets/img/intelligences/${props.image}.png`}
          />
          <View
            style={{
              backgroundColor: '#f4ab94',
              height: 90,
              width: '100%',
              position: 'absolute',
              bottom: 0,
              right: 0,
              borderTopLeftRadius: 20,
              zIndex: -1,
            }}
          ></View>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          paddingLeft: 45,
        }}
      >
        <View style={{ width: 400 }}>
          <SubtitleIntelligence
            subtitle={
              '¿Cuáles son indicadores de que posees\neste tipo de inteligencia?'
            }
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingRight: 45,
            gap: 15,
            justifyContent: 'center',
            marginTop: 15,
          }}
        >
          {props.indicators.map((indicator, index) => (
            <View
              style={{
                width: '30%',
                padding: 10,
                backgroundColor: '#f2f2f2',
                borderRadius: 10,
                borderBottomWidth: 1,
                borderRightWidth: 1,
                borderColor: '#b5b5b5',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  lineHeight: 1.2,
                }}
              >
                {indicator}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
