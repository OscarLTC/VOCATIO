import { Text, View } from '@react-pdf/renderer';

export interface CardTinyViewProps {
  color: string;
  title: string;
  description: string;
}

export const CardTinyView = (props: CardTinyViewProps) => {
  return (
    <View
      style={{
        width: '48%',
      }}
    >
      <View
        style={{
          backgroundColor: props.color,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderTopRightRadius: 20,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            fontWeight: 'bold',
            lineHeight: 1.2,
            textAlign: 'center',
          }}
        >
          {props.title}
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: '#f2f2f2',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomWidth: 1,
          borderRightWidth: 1,
          borderColor: '#b5b5b5',
        }}
      >
        <Text
          style={{
            fontSize: 13,
            lineHeight: 1.5,
            textAlign: 'center',
          }}
        >
          {props.description}
        </Text>
      </View>
    </View>
  );
};
