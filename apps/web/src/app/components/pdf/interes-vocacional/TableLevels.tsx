import { Text, View } from '@react-pdf/renderer';

export const TableLevels = () => {
  const levels = [
    {
      level: 'MUY ALTO',
      porcentage: '80 - 100%',
      color: '#a9e9da',
    },
    {
      level: 'ALTO',
      porcentage: '60 - 79%',
      color: '#bceee2',
    },
    {
      level: 'PROMEDIO',
      porcentage: '40 - 59%',
      color: '#f2f2f2',
    },
    {
      level: 'BAJO',
      porcentage: '20 - 39%',
      color: '#fae5de',
    },
    {
      level: 'MUY BAJO',
      porcentage: '1 - 19%',
      color: '#f6d1c6',
    },
  ];

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 'bold',
          borderBottomWidth: 1.5,
          paddingVertical: 10,
          borderColor: '#434443',
        }}
      >
        <Text
          style={{
            width: '50%',
            textAlign: 'center',
          }}
        >
          Nivel de interés
        </Text>
        <Text
          style={{
            width: '50%',
            textAlign: 'center',
          }}
        >
          Porcentaje de interés
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          borderColor: '#434443',
        }}
      >
        {levels.map((level, index) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: level.color,
              borderTopWidth: 0.25,
              borderBottomWidth: 0.25,
              alignItems: 'center',
            }}
            key={index}
          >
            <View
              style={{
                width: '50%',
                textAlign: 'center',
                paddingVertical: 7,
                fontWeight: 'semibold',
              }}
            >
              <Text>{level.level}</Text>
            </View>
            <View
              style={{
                width: '50%',
                textAlign: 'center',
                borderLeftWidth: 0.5,
                paddingVertical: 7,
              }}
            >
              <Text>{level.porcentage}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
