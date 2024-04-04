import { Image, Page, Text, View } from '@react-pdf/renderer';
import { LogoHeader } from './LogoHeader';
import { DocumentsFooter } from '../DocumentsFooter';
import { ResultTypeTwo } from '../../../models/result.model';

export interface PageFiveProps {
  resultForSurvey: ResultTypeTwo;
}

export const PageFive = (props: PageFiveProps) => {
  return (
    <Page
      size="A4"
      style={{
        flexDirection: 'column',
        display: 'flex',
        paddingVertical: 15,
        fontFamily: 'Poppins',
        color: '#434343',
      }}
    >
      <View style={{ paddingHorizontal: 35 }}>
        <LogoHeader />
      </View>
      <View>
        <View
          style={{
            borderBottom: 3,
            borderColor: '#013552',
            marginHorizontal: 40,
            marginTop: 10,
            paddingBottom: 10,
          }}
        >
          <Text>Primer Arquetipo:</Text>
          <Text style={{ color: '#013552', fontWeight: 'bold', fontSize: 30 }}>
            {`${props.resultForSurvey.archetype} `}
            <Text style={{ fontWeight: 'normal' }}>
              ({props.resultForSurvey.concept})
            </Text>
          </Text>
        </View>
        <View
          style={{
            fontSize: 12,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 30,
          }}
        >
          <View style={{ marginRight: 20 }}>
            <Image
              style={{
                width: 200,
                marginLeft: 20,
                marginTop: `${
                  props.resultForSurvey?.category_id === 132 ? 25 : 0
                }`,
              }}
              src={`/src/assets/img/archetypes/${props.resultForSurvey?.image_archetype[0]}`}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: 220,
                height: 100,
                backgroundColor: `${props.resultForSurvey.group_archetype.color}`,
                opacity: 0.53,
                zIndex: -1,
                borderTopRightRadius: 30,
              }}
            ></View>
          </View>
          <View style={{ width: 315, marginTop: 15 }}>
            <View
              style={{
                paddingVertical: 8,
                paddingLeft: 8,
                backgroundColor: `${props.resultForSurvey.group_archetype.color}`,
                borderTopRightRadius: 15,
                color: 'white',
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>
                Motivación o deseo principal en la vida:
              </Text>
              <Text>{props.resultForSurvey.group_archetype.hero}</Text>
            </View>
            <View style={{ marginTop: 5, paddingLeft: 10 }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: `${props.resultForSurvey.group_archetype.color}`,
                  marginVertical: 20,
                  fontSize: 12,
                }}
              >
                Definición:
              </Text>
              <Text
                style={{
                  textAlign: 'justify',
                  lineHeight: 1.4,
                  fontSize: 11,
                  color: '#595959',
                }}
              >
                {props.resultForSurvey.definition}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            fontSize: 12,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 30,
          }}
        >
          <View style={{ width: 315, marginTop: 15, fontSize: 9 }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: `${props.resultForSurvey.group_archetype.color}`,
                marginBottom: 10,
              }}
            >
              Aspectos más importantes:
            </Text>
            <View
              style={{
                marginTop: 5,
                flexDirection: 'column',
                gap: 10,
                color: '#404040',
              }}
            >
              <View
                style={{
                  paddingHorizontal: 9,
                  paddingVertical: 9,
                  backgroundColor: '#fcfafa',
                  borderRadius: 10,
                }}
              >
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>{'Su meta: '}</Text>
                  {props.resultForSurvey.characteristics[0]}
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 9,
                  paddingVertical: 9,
                  backgroundColor: '#fcfafa',
                  borderRadius: 10,
                }}
              >
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>
                    {'Su mayor temor: '}
                  </Text>
                  {props.resultForSurvey.characteristics[1]}
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 9,
                  paddingVertical: 9,
                  backgroundColor: '#fcfafa',
                  borderRadius: 10,
                }}
              >
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>
                    {'Su punto débil: '}
                  </Text>
                  {props.resultForSurvey.characteristics[2]}
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 9,
                  paddingVertical: 9,
                  backgroundColor: '#fcfafa',
                  borderRadius: 10,
                }}
              >
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>{'Sus talentos: '}</Text>
                  {props.resultForSurvey.characteristics[3]}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginLeft: 20,
            }}
          >
            <Image
              style={{
                width: 200,
                marginRight: 20,
                marginTop: `${
                  props.resultForSurvey.category_id === 132 ? 25 : 0
                }`,
              }}
              src={`/src/assets/img/archetypes/${props.resultForSurvey.image_archetype[1]}`}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 220,
                height: 100,
                backgroundColor: `${props.resultForSurvey.group_archetype.color}`,
                opacity: 0.53,
                zIndex: -1,
                borderTopLeftRadius: 30,
              }}
            ></View>
          </View>
        </View>
      </View>
      <DocumentsFooter />
    </Page>
  );
};
