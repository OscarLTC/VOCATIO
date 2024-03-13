import { Image, View } from '@react-pdf/renderer';

export const LogoFooter = () => {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        position: 'absolute',
        bottom: 50,
        right: 35,
      }}
    >
      <Image
        style={{ width: 45, alignSelf: 'flex-end', opacity: 0.1 }}
        src={'/src/assets/img/image.png'}
      />
    </View>
  );
};
