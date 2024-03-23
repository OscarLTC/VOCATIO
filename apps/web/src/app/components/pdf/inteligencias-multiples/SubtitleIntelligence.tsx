import { Text, View } from '@react-pdf/renderer';

interface SubtitleIntelligenceProps {
  subtitle: string;
}
export const SubtitleIntelligence = (props: SubtitleIntelligenceProps) => {
  return (
    <View
      style={{
        backgroundColor: '#e3724a',
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
        {props.subtitle}
      </Text>
    </View>
  );
};
