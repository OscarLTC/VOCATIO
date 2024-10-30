import { Image, Text, View } from '@react-pdf/renderer';

export interface ArchetypesChartProps {
  archetypesData: Array<{
    percentage: number;
    selected: boolean;
    title: string;
  }>;
}

export const ArchetypesChart = (props: ArchetypesChartProps) => {
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

  const archetypesCategories = [
    {
      title: 'Promover\nestructura\nal mundo',
      category: 'Orden',
      archetypes: ['El Gobernante', 'El Creador', 'El Cuidador'],
      color: '#e96e49',
    },
    {
      title: 'Conectar\ncon otros',
      category: 'Social',
      archetypes: ['El Bromista', 'El Amante', 'El Amigo'],
      color: '#ea89a9',
    },
    {
      title: 'Dejar una\nhuella en el\nmundo',
      category: 'Ego',
      archetypes: ['El Héroe', 'El Rebelde', 'El Mago'],
      color: '#274f9c',
    },
    {
      title: 'Perseguir la\nesperitualidad\ny la realización',
      category: 'Libertad',
      archetypes: ['El Inocente', 'El Explorador', 'El Sabio'],
      color: '#00957c',
    },
  ];

  const data = [
    {
      color: '#e96e49',
      category: 'Orden',
      archetypes: [
        {
          title: 'El Gobernante',
          percentage: props.archetypesData[0].percentage,
          selected: props.archetypesData[0].selected,
        },
        {
          title: 'El Creador',
          percentage: props.archetypesData[1].percentage,
          selected: props.archetypesData[1].selected,
        },
        {
          title: 'El Cuidador',
          percentage: props.archetypesData[2].percentage,
          selected: props.archetypesData[2].selected,
        },
      ],
    },
    {
      color: '#ea89a9',
      category: 'Social',
      archetypes: [
        {
          title: 'El Bromista',
          percentage: props.archetypesData[3].percentage,
          selected: props.archetypesData[3].selected,
        },
        {
          title: 'El Amante',
          percentage: props.archetypesData[4].percentage,
          selected: props.archetypesData[4].selected,
        },
        {
          title: 'El Amigo',
          percentage: props.archetypesData[5].percentage,
          selected: props.archetypesData[5].selected,
        },
      ],
    },
    {
      color: '#274f9c',
      category: 'Ego',
      archetypes: [
        {
          title: 'El Héroe',
          percentage: props.archetypesData[6].percentage,
          selected: props.archetypesData[6].selected,
        },
        {
          title: 'El Rebelde',
          percentage: props.archetypesData[7].percentage,
          selected: props.archetypesData[7].selected,
        },
        {
          title: 'El Mago',
          percentage: props.archetypesData[8].percentage,
          selected: props.archetypesData[8].selected,
        },
      ],
    },
    {
      color: '#00957c',
      category: 'Libertad',
      archetypes: [
        {
          title: 'El Inocente',
          percentage: props.archetypesData[9].percentage,
          selected: props.archetypesData[9].selected,
        },
        {
          title: 'El Explorador',
          percentage: props.archetypesData[10].percentage,
          selected: props.archetypesData[10].selected,
        },
        {
          title: 'El Sabio',
          percentage: props.archetypesData[11].percentage,
          selected: props.archetypesData[11].selected,
        },
      ],
    },
  ];

  return (
    <View style={{ paddingVertical: 30, flexDirection: 'row' }}>
      <View
        style={{
          fontSize: 10,
          overflow: 'hidden',
          flexDirection: 'column',
          width: 220,
        }}
      >
        <View
          style={{
            height: 450,
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {archetypesCategories.map((category, index) => (
            <View
              style={{
                flexDirection: 'row',
                color: 'white',
                borderLeftWidth: 1,
                borderTopWidth: 1,
                height: 100,
              }}
            >
              <View
                style={{
                  width: 150,
                  textAlign: 'center',
                  fontSize: 12,
                  fontWeight: 'bold',
                  backgroundColor: category.color,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                }}
              >
                <Text>{category.title}</Text>
                <Text
                  style={{
                    fontWeight: 'normal',
                    fontStyle: 'italic',
                    textTransform: 'uppercase',
                    fontSize: 12,
                  }}
                >
                  ({category.category})
                </Text>
              </View>
              <View
                style={{
                  width: 100,
                  textAlign: 'center',
                  fontSize: 10,
                  fontWeight: 'bold',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderLeftWidth: 1,
                }}
              >
                {category.archetypes.map((archetype, index) => (
                  <View
                    style={{
                      height: '100%',
                      width: '100%',
                      backgroundColor: category.color,
                      borderBottomWidth: 1,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text>{archetype}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
        }}
      >
        <View
          style={{
            height: 450,
            borderLeftWidth: 1,
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: 250,
          }}
        >
          <View style={{ flexDirection: 'column', gap: 10 }}>
            {data.map((category, index) => (
              <View
                style={{
                  height: 100,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                }}
              >
                {category.archetypes.map((archetype, index) => (
                  <View style={{ flexDirection: 'row', width: 300 }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        height: '100%',
                      }}
                    >
                      <View
                        style={{
                          width: archetype.percentage * 2.5,
                          height: 30,
                          backgroundColor: archetype.selected
                            ? category.color
                            : '#a7a7a7',
                          flexDirection: 'row',
                          alignSelf: 'center',
                          marginVertical: 10,
                        }}
                      ></View>
                    </View>

                    <Text
                      style={{
                        fontSize: 15,
                        textAlign: 'center',
                        fontWeight: 'demibold',
                        alignSelf: 'center',
                        marginLeft: 10,
                      }}
                    >
                      {archetype.percentage}%
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
        <View>
          <View
            style={{
              borderLeftWidth: 1,
              height: 5,
              flexDirection: 'row',
              width: 250,
              borderBottomWidth: 1,
            }}
          ></View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View
              style={{
                width: 250,
                justifyContent: 'space-between',
                flexDirection: 'row',
                position: 'absolute',
                left: -28,
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
                width: 258,
              }}
            >
              100
            </Text>
          </View>
          <View
            style={{
              width: 250,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            {levels.map((level, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'column',
                  fontSize: 7,
                  color: '#484848',
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
          <View style={{ width: 250, marginTop: 15 }}>
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
