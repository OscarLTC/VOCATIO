import { Text, View } from '@react-pdf/renderer';
import { formatDateText } from '../../utils/dateUtils';

interface MainFooterProps {
  person: { name: string; lastName: string };
  surveyProgramming: { section: string; endDate: string };
}

export const MainFooter = (props: MainFooterProps) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#013552',
        marginHorizontal: 30,
        paddingVertical: 30,
        paddingHorizontal: 60,
        color: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        fontSize: 13,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 5,
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>Nombre y Apellidos:</Text>
        <Text
          style={{
            fontSize: 12,
            alignSelf: 'center',
            fontWeight: 'medium',
          }}
        >
          {`${props.person.name} ${props.person.lastName}`}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 5,
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>Grado de Instrucción:</Text>
        <Text
          style={{
            fontSize: 12,
            alignSelf: 'center',
            fontWeight: 'medium',
          }}
        >
          {props.surveyProgramming.section}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 5,
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>Fecha de Culminación: </Text>
        <Text
          style={{
            fontSize: 12,
            alignSelf: 'center',
            fontWeight: 'medium',
          }}
        >
          {formatDateText(props.surveyProgramming.endDate)}
        </Text>
      </View>
    </View>
  );
};
