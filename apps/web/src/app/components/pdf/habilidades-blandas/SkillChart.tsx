import { Image, Text, View } from '@react-pdf/renderer';

export const SkillChart = () => {
  const skills = [
    {
      title: 'Liderazgo',
      image: '/src/assets/img/skills/liderazgo.png',
    },
    {
      title: 'Resolución\nde conflictos',
      image: '/src/assets/img/skills/resolucion_de_problemas.png',
    },
    {
      title: 'Empatía',
      image: '/src/assets/img/skills/empatia.png',
    },
    {
      title: 'Gestión\ndel Tiempo',
      image: '/src/assets/img/skills/gestion_del_tiempo.png',
    },
    {
      title: 'Habilidades\norganizativas',
      image: '/src/assets/img/skills/habilidades_organizativas.png',
    },
    {
      title: 'Trabajo\nen equipo',
      image: '/src/assets/img/skills/trabajo_en_equipo.png',
    },
    {
      title: 'Comunicación',
      image: '/src/assets/img/skills/comunicacion.png',
    },
  ];

  return (
    <View style={{ paddingVertical: 30 }}>
      <View
        style={{
          height: 500,
          paddingVertical: 10,
          fontSize: 10,
          borderRightWidth: 1,
          overflow: 'hidden',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 150,
        }}
      >
        {skills.map((skill, index) => (
          <View
            key={index}
            style={{
              textAlign: 'right',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 9, width: 70, fontWeight: 'demibold' }}>
              {skill.title}
            </Text>
            <Image
              src={skill.image}
              style={{
                width: 60,
                height: 60,
                marginVertical: 'auto',
                objectFit: 'contain',
              }}
            />
          </View>
        ))}
      </View>
      <View>
        <View></View>
        <View></View>
      </View>
    </View>
  );
};
