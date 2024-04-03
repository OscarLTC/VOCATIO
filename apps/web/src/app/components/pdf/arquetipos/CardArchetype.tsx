import { Text, View } from '@react-pdf/renderer';
import { CardDetails } from './CardDetails';

interface CardArchetypeProps {
  index: number;
  title: string;
  color: string;
  data: {
    letter: string;
    title: string;
    description: string;
  }[];
}

export const CardArchetype = (props: CardArchetypeProps) => {
  return (
    <View style={{ fontSize: 9, marginTop: 8 }}>
      <View
        style={{
          flexDirection: 'row',
          fontWeight: 'bold',
          paddingVertical: 7,
          paddingLeft: 15,
          color: 'white',
          backgroundColor: props.color,
          borderTopRightRadius: 20,
          fontSize: 12,
        }}
      >
        <Text>{props.index}.</Text>
        <Text style={{ marginLeft: 15 }}>{props.title}</Text>
      </View>
      <View style={{ display: 'flex', gap: 10, paddingHorizontal: 8 }}>
        <Text
          style={{
            marginTop: 8,
            fontSize: 10.5,
            fontWeight: 'normal',
            marginLeft: 10,
          }}
        >
          En esta categoría se hallan las personalidades que tienden a:
        </Text>
        {props.data.map((item, index) => (
          <CardDetails
            key={index}
            letter={item.letter}
            title={item.title}
            description={item.description}
          />
        ))}
      </View>
    </View>
  );
};
