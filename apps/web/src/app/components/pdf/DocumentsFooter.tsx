import { Text, View } from '@react-pdf/renderer';
import { formatDate } from '../../utils/dateUtils';

export const DocumentsFooter = () => {
  return (
    <View
      style={{
        backgroundColor: '#013552',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        color: 'white',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        height: 35,
        alignItems: 'center',
      }}
    >
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <Text style={{ fontSize: 11, fontWeight: 'bold', alignSelf: 'center' }}>
          Reporte de Resultados
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 12, alignSelf: 'center' }}>
          VOCATIO
        </Text>
      </View>
      <Text
        style={{ fontWeight: 'light', fontSize: 11 }}
      >{`Lima - Perú, ${formatDate(
        new Date().toISOString().split('T')[0]
      )}`}</Text>
    </View>
  );
};
