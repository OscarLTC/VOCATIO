import { Text, View } from '@react-pdf/renderer';

interface TitlePdfProps {
  title: string;
}

export const TitlePdf = (props: TitlePdfProps) => {
  return (
    <View style={{ borderBottom: 3, borderColor: '#013552' }}>
      <Text
        style={{
          color: '#013552',
          fontWeight: 'bold',
          fontSize: 30,
          paddingLeft: 20,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};
