import { Image, Text, View } from '@react-pdf/renderer';

export interface SkillChartProps {
  skills: Array<{
    title: string;
    image: string;
    percentage: number;
    color: string;
  }>;
}

export const SkillChart = (props: SkillChartProps) => {
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
          paddingVertical: 10,
          fontSize: 10,
          overflow: 'hidden',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 150,
        }}
      >
        {props.skills
          .sort((a, b) => b.percentage - a.percentage)
          .map((skill, index) => (
            <View
              key={index}
              style={{
                textAlign: 'right',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 9, width: 70, fontWeight: 'demibold' }}>
                {skill.title}
              </Text>
              <Image
                src={`/src/assets/img/skills/${skill.image}`}
                style={{
                  width: 60,
                  height: 60,
                }}
              />
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
            borderLeftWidth: 1,
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          {props.skills.map((skill, index) => (
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
                  height: 30,
                  width: 3.3 * skill.percentage,
                  backgroundColor: skill.color,
                }}
              ></View>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  fontWeight: 'demibold',
                }}
              >{`${skill.percentage}%`}</Text>
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
