import { Text, View } from '@react-pdf/renderer';

interface TitleIntelligenceProps {
  title: string;
}

export const TitleIntelligence = (props: TitleIntelligenceProps) => {
  return (
    <View
      style={{
        borderBottomWidth: 3,
        color: '#0a3552',
        borderColor: '#0a3552',
        marginRight: 45,
        paddingHorizontal: 10,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'light',
        }}
      >
        Inteligencia predominante:
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};
