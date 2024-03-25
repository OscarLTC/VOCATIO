import { Image, Text, View } from '@react-pdf/renderer';

export interface InterestChartProps {
  interests: Array<{
    title: string;
    percentage: number;
    color: string;
  }>;
}

export const InterestChart = (props: InterestChartProps) => {
  const levels = [
    {
      title: 'Muy Bajo',
      range: '0-19%',
    },
    {
      title: 'Bajo',
      range: '20-39%',
    },
    {
      title: 'Promedio',
      range: '40-59%',
    },
    {
      title: 'Alto',
      range: '60-79%',
    },
    {
      title: 'Muy Alto',
      range: '80-100%',
    },
  ];

  return (
    <View style={{ paddingVertical: 30, flexDirection: 'row' }}>
      <View
        style={{
          height: 500,
          paddingTop: 10,
          fontSize: 10,
          overflow: 'hidden',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 160,
        }}
      >
        {props.interests
          .sort((a, b) => b.percentage + a.percentage)
          .map((interest, index) => (
            <View
              key={index}
              style={{
                textAlign: 'right',
                flexDirection: 'row',
                height: 20,
                alignItems: 'center',
                lineHeight: 1,
              }}
            >
              <Text style={{ fontSize: 7, width: 150 }}>{interest.title}</Text>
            </View>
          ))}
      </View>
      <View
        style={{
          flexDirection: 'column',
        }}
      >
        <View
          style={{
            height: 500,
            paddingTop: 10,
            borderLeftWidth: 1,
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          {props.interests
            .sort((a, b) => b.percentage - a.percentage)
            .map((interest, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: '100%',
                  gap: 10,
                }}
                key={index}
              >
                <View
                  style={{
                    height: 20,
                    width: 3.3 * interest.percentage,
                    backgroundColor: interest.color,
                  }}
                ></View>
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: 'center',
                    fontWeight: 'demibold',
                  }}
                >{`${interest.percentage}%`}</Text>
              </View>
            ))}
        </View>
        <View>
          <View
            style={{
              borderLeftWidth: 1,
              height: 10,
              flexDirection: 'row',
              width: 330,
              borderBottomWidth: 1,
            }}
          >
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: '20%',
                    borderRightWidth: 1,
                  }}
                ></View>
              ))}
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View
              style={{
                width: 330,
                justifyContent: 'space-between',
                flexDirection: 'row',
                position: 'absolute',
                left: -32,
              }}
            >
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Text
                    style={{
                      fontSize: 8,
                      color: '#a8a8a8',
                      textAlign: 'center',
                      width: '20%',
                    }}
                  >
                    {index * 20}
                  </Text>
                ))}
            </View>
            <Text
              style={{
                fontSize: 8,
                color: '#a8a8a8',
                textAlign: 'right',
                width: 338,
              }}
            >
              100
            </Text>
          </View>
          <View
            style={{
              width: 330,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            {levels.map((level, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'column',
                  fontSize: 8,
                  color: '#494949',
                  width: '20%',
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                  }}
                >
                  {level.title}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                  }}
                >
                  {level.range}
                </Text>
              </View>
            ))}
          </View>
          <View style={{ width: 330, marginTop: 15 }}>
            <Text
              style={{ fontSize: 9, fontWeight: 'bold', textAlign: 'center' }}
            >
              Niveles de desarrollo
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
