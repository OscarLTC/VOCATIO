import { Text, View } from '@react-pdf/renderer';

export interface CardInterestProps {
  title: string;
  description: string;
  color: string;
  width?: number;
}

export const CardInterest = (props: CardInterestProps) => {
  return (
    <View style={{ flexDirection: 'column', gap: 15 }}>
      <View style={{ width: props.width ?? '100%' }}>
        <View
          style={{
            backgroundColor: props.color,
            paddingHorizontal: 10,
            paddingTop: 5,
            paddingBottom: 10,
            borderTopRightRadius: 20,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 1.2,
            }}
          >
            {props.title}
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: '#f2f2f2',
          borderRadius: 20,
          borderBottomWidth: 1,
          borderRightWidth: 1,
          borderColor: '#b5b5b5',
        }}
      >
        <Text
          style={{
            fontSize: 11,
            lineHeight: 2,
            textAlign: 'justify',
          }}
        >
          {props.description}
        </Text>
      </View>
    </View>
  );
};
