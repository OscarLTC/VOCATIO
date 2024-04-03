import { Image, View } from '@react-pdf/renderer';
import React from 'react';

export const LogoHeader = () => {
  return (
    <View style={{ width: '100%', display: 'flex' }}>
      <Image
        style={{ width: 45, alignSelf: 'flex-end', opacity: 0.1 }}
        src={'/src/assets/img/image.png'}
      />
    </View>
  );
};
