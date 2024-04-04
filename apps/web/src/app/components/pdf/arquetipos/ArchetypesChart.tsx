import { Image, Text, View } from '@react-pdf/renderer';

interface ArchetypesChartProps {
  archetypes: {
    title: string;
    percentage: number;
    color: string;
    selected: boolean;
  }[][];
}

export const ArchetypesChart = () => {
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
          percentage: 90,
          selected: true,
        },
        {
          title: 'El Creador',
          percentage: 85,
          selected: true,
        },
        {
          title: 'El Cuidador',
          percentage: 55,
          selected: false,
        },
      ],
    },
    {
      color: '#ea89a9',
      category: 'Social',
      archetypes: [
        {
          title: 'El Bromista',
          percentage: 70,
          selected: false,
        },
        {
          title: 'El Amante',
          percentage: 60,
          selected: false,
        },
        {
          title: 'El Amigo',
          percentage: 50,
          selected: false,
        },
      ],
    },
    {
      color: '#274f9c',
      category: 'Ego',
      archetypes: [
        {
          title: 'El Héroe',
          percentage: 80,
          selected: true,
        },
        {
          title: 'El Rebelde',
          percentage: 60,
          selected: false,
        },
        {
          title: 'El Mago',
          percentage: 45,
          selected: false,
        },
      ],
    },
    {
      color: '#00957c',
      category: 'Libertad',
      archetypes: [
        {
          title: 'El Inocente',
          percentage: 50,
          selected: false,
        },
        {
          title: 'El Explorador',
          percentage: 45,
          selected: false,
        },
        {
          title: 'El Sabio',
          percentage: 35,
          selected: false,
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
