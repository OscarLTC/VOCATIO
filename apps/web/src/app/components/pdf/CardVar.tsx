import { Text, View } from '@react-pdf/renderer';

export interface CardVarProps {
  title: string;
  description: string;
  color: string;
  fontSize?: number;
}

export const CardVar = (props: CardVarProps) => {
  return (
    <View
      style={{
        fontSize: props.fontSize || 12,
        backgroundColor: '#f2f2f2',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 10,
        marginTop: 10,
        borderRightWidth: 0.5,
        borderBottomWidth: 2,
        borderColor: '#b5b5b5',
      }}
    >
      <View
        style={{
          backgroundColor: props.color,
          paddingTop: 10,
          paddingLeft: 10,
          borderTopRightRadius: 20,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 15,
          }}
        >
          {props.title}
        </Text>
      </View>
      <Text
        style={{
          paddingTop: 10,
          paddingHorizontal: 15,
        }}
      >
        {props.description}
      </Text>
    </View>
  );
};
