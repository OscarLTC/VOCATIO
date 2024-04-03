import { Text, View } from '@react-pdf/renderer';
import React from 'react';

interface CardDetailsProps {
  letter: string;
  title: string;
  description: string;
}

export const CardDetails = (props: CardDetailsProps) => {
  return (
    <View
      style={{
        paddingVertical: 10,
        paddingLeft: 20,
        borderRadius: 12,
        backgroundColor: '#fcfafa',
        flexDirection: 'row',
      }}
    >
      <Text style={{ fontWeight: 'bold' }}>{props.letter}.</Text>
      <Text style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>{props.title}: </Text>
        {props.description}
      </Text>
    </View>
  );
};
