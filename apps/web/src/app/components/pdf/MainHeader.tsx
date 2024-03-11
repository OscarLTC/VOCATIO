import { Image, Text, View } from '@react-pdf/renderer';

interface MainHeaderProps {
  title: string;
  subtitle?: string;
}

export const MainHeader = (props: MainHeaderProps) => {
  return (
    <View
      style={{
        paddingHorizontal: '25px',
      }}
    >
      <View style={{ marginTop: 70, marginBottom: 10 }}>
        <Text style={{ fontSize: 12, fontWeight: 600 }}>
          {`REPORTE  DE  RESULTADOS`}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTop: 3,
          borderBottom: 3,
          borderColor: '#013552',
          color: '#013552',
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        <View style={{ paddingRight: 80 }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
            {props.title}
          </Text>
          {props.subtitle && (
            <Text style={{ fontSize: 15, fontWeight: 'normal' }}>
              {props.subtitle}
            </Text>
          )}
        </View>
        <Image
          style={{ width: 70 }}
          src={'/src/assets/img/logo_principal_color.png'}
        />
      </View>
    </View>
  );
};
