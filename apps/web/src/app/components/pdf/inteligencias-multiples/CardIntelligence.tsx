import { Image, Text, View } from '@react-pdf/renderer';

export interface CardIntelligenceProps {
  intelligence: string;
  image: string;
}

export const CardIntelligence = (props: CardIntelligenceProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 120,
          height: 120,
          flexDirection: 'column',
          backgroundColor: '#f2f2f2',
          borderRadius: 20,
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#a1a1a1',
          borderRightWidth: 0.5,
          borderBottomWidth: 0.5,
        }}
      >
        <Image
          style={{
            width: 90,
          }}
          src={`/src/assets/img/intelligences/${props.image}.png`}
        />
      </View>
      <View
        style={{
          width: 110,
          flexDirection: 'column',
          backgroundColor: '#0e947e',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          color: 'white',
          borderLeftWidth: 0.5,
          borderColor: '#096959',
          paddingVertical: 10,
          height: 60,
          justifyContent: 'center',
          lineHeight: 1,
        }}
      >
        <Text
          style={{
            fontWeight: 'light',
            textAlign: 'center',
            fontSize: 8,
          }}
        >
          Inteligencia
        </Text>
        <Text
          style={{
            marginTop: 2,
            fontSize: 11,
            textAlign: 'center',
          }}
        >
          {props.intelligence}
        </Text>
      </View>
    </View>
  );
};
