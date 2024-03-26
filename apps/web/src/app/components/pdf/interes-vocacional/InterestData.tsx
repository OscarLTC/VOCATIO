import { Image, Text, View } from '@react-pdf/renderer';

interface InterestDataProps {
  color: string;
  image: string;
  title: string;
  description: string;
  porcentage: number;
  careers: string[];
}

export const InterestData = (props: InterestDataProps) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: props.color,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              paddingTop: 10,
              paddingBottom: 15,
              paddingHorizontal: 30,
              borderColor: '#b5b5b5',
              lineHeight: 1.1,
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
              }}
            >
              {props.title}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 55,
                fontWeight: 'bold',
              }}
            >{`${props.porcentage}%`}</Text>
          </View>
        </View>
        <View
          style={{
            width: 220,
            padding: 20,
          }}
        >
          <Image src={`/src/assets/img/interest/${props.image}`} />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'justify',
            color: '#434443',
            paddingHorizontal: 20,
          }}
        >
          {props.description}
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#0a3552',
            fontSize: 13,
            fontWeight: 'bold',
          }}
        >
          CARRERAS ASOCIADAS
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexWrap: 'wrap',
            marginTop: 20,
            gap: 20,
          }}
        >
          {props.careers.map((career, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10,
                lineHeight: 1.2,
                paddingVertical: 15,
                backgroundColor: '#f4f5f6',
                borderRightWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#d4d4d4',
                borderRadius: 8,
                minWidth: 140,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: '#434443',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                {career}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
