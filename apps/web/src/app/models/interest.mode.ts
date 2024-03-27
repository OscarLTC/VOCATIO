export const Groups = {
  Ego: {
    name: 'Ego',
    color: '#1b4ad4',
  },
  Social: {
    name: 'Social',
    color: '#ed8caa',
  },
  Libertad: {
    name: 'Libertad',
    color: '#0a937c',
  },

  Orden: {
    name: 'Orden',
    color: '#e37047',
  },
};

enum Interest {
  CienciasPuras = 'Ciencias puras / experimentales',
  CienciasTecnológicas = 'Ciencias tecnológicas',
  CienciasSocial = 'Ciencias sociales / humanidades',
  CienciasSalud = 'Ciencias de la salud',
  CienciasPoliticas = 'Ciencias políticas / juridico social',
  CienciasDeporte = 'Ciencias del deporte',
  AgropecuarioAmbiental = 'Agropecuario - ambiental',
  ArtisticoPlastico = 'Artístico plástico - Moda',
  ReligiosoFiolosofico = 'Religioso - filosófico',
  ArtisticoLiterario = 'Artístico literario',
  TurismoHoteleria = 'Turismo y hotelería',
  ArtisticoActoral = 'Artístico actoral',
  ArtisticoMusical = 'Artístico musical',
  Psicopedagogico = 'Psicopedagógico',
  FFAASeguridad = 'Fuerzas armadas - Seguridad',
  Comunicacion = 'Comunicación',
  Veterinaria = 'Veterinaria',
  Empresarial = 'Empresarial / administrativo',
  Mecanica = 'Mecánica y transformación',
  Calculo = 'Cálculo',
  Idiomas = 'Idiomas',
}

export const InteresData = {
  [Interest.CienciasPuras]: {
    color: Groups.Orden.color,
    description:
      'Las carreras relacionadas a las ciencias puras y/o experimentales, son todas aquellas que requieren del método científico para su estudio, con la finalidad de encontrar respuestas o explicaciones a distintos fenómenos y cuestionamientos.',
    careers: ['Física', 'Química', 'Biología', 'Matemáticas', 'Bioquímica'],
    title: 'Ciencias puras\nexperimentales',
    image: 'ciencias_puras',
  },
  [Interest.CienciasTecnológicas]: {
    description:
      'Las carreras relacionadas a las ciencias tecnológicas, son todas aquellas que ofrecen una formación orientada a los procesos operativos, administrativos y sociales, que involucren el uso de dispositivos o softwares para el funcionamiento de una empresa. Ofrecen herramientas innovadoras para desarrollar el desarrollo de la cibernética y nuevos avances científicos.',
    careers: [
      'Ingeniería Informática',
      'Ingeniería Electrónica',
      'Ingeniería Mecatrónica',
      'Ingeniería de Sistemas',
      'Ingeniería de Telecomunicaciones',
    ],
    color: Groups.Orden.color,
    title: 'Ciencias tecnológicas',
    image: 'ciencias_tecnologicas',
  },
  [Interest.CienciasSalud]: {
    description:
      'Las carreras relacionadas a las ciencias de la salud, son todas aquellas que buscan que la humanidad pueda mantener, reponer y potenciar su estado de salud física. Además de prevenir, tratar y erradicar enfermedades. En sí, buscan brindar una mejor calidad de vida a las personas.',
    careers: [
      'Medicina Humana',
      'Odontología',
      'Nutrición',
      'Tecnología Médica',
      'Enfermería',
      'Obstetricia',
      'Psicología Clínica',
    ],
    color: Groups.Ego.color,
    title: 'Ciencias de la\nSalud',
    image: 'ciencias_salud',
  },
  [Interest.CienciasSocial]: {
    description:
      'Las carreras relacionadas a las ciencias sociales y humanidades, son aquellas que se basan en el estudio del ser humano como sujeto social. Su estudio no sólo es de manera individual, sino también estudia al ser humano en su conjunto. En estas carreras se imparten los distintos aspectos que se relacionan con las sociedades, ya sea en el presente el pasado, y su evolución. ',
    careers: [
      'Sociología',
      'Historia',
      'Filosofía',
      'Psicología Social',
      'Antropología',
      'Trabajo Social',
    ],
    color: Groups.Social.color,
    title: 'Ciencias sociales\nhumanidades',
    image: 'humanidades',
  },
  [Interest.CienciasPoliticas]: {
    description:
      'Las carreras relacionadas a las ciencias políticas, se ocupan de estudiar las leyes del país. En este grupo profesional se analizan y evaluan problemas públicos, privados, políticos y sociales que son de suma importancia para aplicar la justicia en el país.',
    careers: ['Derecho', 'Ciencias Políticas', 'Diplomacia'],
    color: Groups.Libertad.color,
    title: 'Ciencias políticas\njurídico social',
    image: 'ciencias_politicas',
  },
  [Interest.Comunicacion]: {
    description:
      'Las carreras relacionadas a las comunicaciónes, promueven el estudio, la investigación y la producción, tomando en consideración el desarrollo científico y tecnológico asì como la sensibilidad artística y cultural. Un comunicador puede desarrollar tareas periodísticas, elabora estrategias de márketing, elaborar campañas de publicidad, diseñar programas de imagen corporativa, entre otras actividades.',
    careers: [
      'Comunicación Audiovisual',
      'Comunicación para\nel Desarrollo',
      'Periodismo',
      'Publicidad',
      'Marketing',
      'Imagen Empresarial',
      'Comunicación y\nFotografía',
      'Relaciones Públicas',
    ],
    color: Groups.Orden.color,
    title: 'Comunicación',
    image: 'comunicacion',
  },
  [Interest.Psicopedagogico]: {
    description:
      'Las carreras relacionadas a las psicopedagogía,  La investigación, reflexión y autocrítica son parte importante de nuestro modelo educativo, ya que motivan a los futuros docentes a proponer mejoras para el desarrollo de sus prácticas y entornos, las que nacerán a partir de la observación consciente de su realidad. Buscamos formar a profesionales en educación con deseo de superarse constantemente y que estén plenamente comprometidos con la mejora de la calidad educativa en el país.',
    careers: [
      'Educación Inicial',
      'Educación Primaria',
      'Educación Secundaria',
      'Psicología Educativa',
      'Educación a la\nDiversidad (Especial)',
    ],
    color: Groups.Social.color,
    title: 'Psicopedagógico',
    image: 'psicopedagogico',
  },
  [Interest.Empresarial]: {
    description:
      'Las carreras relacionadas al ámbito empresarial - administrativo, buscan adquirir conocimientos teórico-prácticos a través de los cuales es posible crear, planear, dirigir, ejecutar y desarrollar cualquier tipo de empresa. Se trata de aprender estrategias para planificar, organizar, dirigir y controlar un sector o a toda una empresa, a partir del uso de  recursos tanto humanos como financieros.',
    careers: [
      'Administración',
      'Administración y Agronegocios',
      'Administración y Finanzas',
      'Administración y Marketing',
      'Administración y Negocios del Deporte',
      'Administración y Negocios Internacionales',
      'Administración y Recursos Humanos',
      'Contabilidad y Administración',
      'Administración y Gerencia del Emprendimiento',
    ],
    color: Groups.Ego.color,
    title: 'Empresarial /\nadministrativo',
    image: 'empresarial',
  },
  [Interest.AgropecuarioAmbiental]: {
    description:
      'Las carreras relacionadas con recursos natuales: Agropecuario-ambiental permiten mejorar la calidad de la producción y transformación de productos alimentarios para el consumo humano, así como aprender a usar la tecnología en la producción para renovar los procesos en la ganadería y la agricultura, medición y análisis en estudios de suelos y agua; estudios agroclimáticos e hidrológicos y ecoambientales, entre otros.',
    careers: [
      'Ingeniería Agroindustrial',
      'Ingeniería de\nIndustria Alimentaria',
      'Agronomía',
      'Ingeniería Forestal',
      'Zootecnia',
    ],
    color: Groups.Libertad.color,
    title: 'Agropecuario\nambiental',
    image: 'ambiental',
  },
  [Interest.ArtisticoPlastico]: {
    description:
      'Las carreras relacionadas con el ámbito artístico plástico - moda, buscan a través del diseño aprender a proyectar el aspecto, la función y la producción de un objeto funcional, por medios de signos gráficos. Aprender el diseño de diversos objetos como pequeñas obras de arte empleadas en campos como la decoración, intervienen  la creación, realización y la expresión artística de escultura, pintura, diseños, grabados. En la moda es la creación de prendas de vestir y accesorios en función a influencias culturales, entre otros. También diseñar espacios  e impulsar el desarrollo social diseñando casas, edificaciones, ambientes de trabajo, recreación entre otros.',
    careers: [
      'Diseño de Moda',
      'Diseño Gráfico',
      'Diseño Industrial',
      'Diseño Publicitario',
      'Artes Plásticas',
      'Diseño de Interiores',
      'Arquitectura',
    ],
    color: Groups.Orden.color,
    title: 'Artístico plástico\nModa',
    image: 'artistico_plastico',
  },
  [Interest.ArtisticoMusical]: {
    description:
      'Las carreras relaciondas al ámbito artístico musical y de la industria de la música como son la composición, dirección y planeación estratégica para entender de manera técnica la música y su estructura, creación de arreglos, desarrollo de proyectos para medios y espectáculos.',
    careers: [
      'Música',
      'Ingeniería de Sonido',
      'Dirección y Producción Musical',
      'Pedagogía en Música',
    ],
    color: Groups.Orden.color,
    title: 'Artístico musical',
    image: 'artistico_musical',
  },
  [Interest.FFAASeguridad]: {
    description:
      'Las carreras relacionadas con el ámbito de las FF.AA. -Seguridad,  se ocupan de asegurar el órden público y territorial , brindando bienestar y seguridad a la ciudadanía, respetando los derechos humanos, haciendo uso de la disciplina, la ética y la moral.',
    careers: ['Ciencias Aeroespaciales', 'Ciencias Militares'],
    color: Groups.Ego.color,
    title: 'Fuerzas armadas\nseguridad',
    image: 'ffaa_seguridad',
  },
  [Interest.CienciasDeporte]: {
    description:
      'Las carreras relacionadas con ciencias del deporte se enfoca en el desarrollo de profesionales que sean expertos en el acondicionamiento físico para cualquier tipo de actividad relacionada con el desempeño de un deporte, así como la gestión administrativa y empresarial deportiva. Ofrecen herramientas para diseñar, gestionar, aplicar dirigir, optimizar y evaluar programas deportivos, con la finalidad de mejorar el rendimiento de los atletas y  cómo funciona el cuerpo humano sano durante el ejercicio o cómo el deporte y la actividad física promueven la salud física, mental y social.',
    careers: [
      'Ciencias de la Actividad Física y del Deporte',
      'Profesor de Educación Física',
    ],
    color: Groups.Ego.color,
    title: 'Ciencias del\ndeporte',
    image: 'ciencias_deporte',
  },
  [Interest.TurismoHoteleria]: {
    description:
      'Las carreras relacionadas con turismo y hoteleria se orienta al servicio a los demás, capaces de identificar, diseñar y gestionar soluciones viables y sostenibles para la industria hotelera. gestión de proyectos y de destinos turísticos, gerenciar, crear empresas de turismo, hotelería y gastronomía con un enfoque humanista y sostenible, promoviendo el desarrollo de la industria de la hospitalidad, de la gastronomía y del turismo, se desarrollan competencias necesarias para asumir roles de liderazgo con visión global.',
    careers: [
      'Administración de Turismo y Hotelera',
      'Gastronomía y Gestión Culinaria',
    ],
    color: Groups.Social.color,
    title: 'Turismo y\nhotelería',
    image: 'turismo_hoteleria',
  },
  [Interest.ArtisticoLiterario]: {
    description:
      'Las carreras relacionadas con el interés artístico literario, permiten conocer  las relaciones entre arte, literatura, sociedad, historia y permite profundizar la comprensión de la cultura actual y a afrontar los nuevos retos de la creación artística y literaria, utiliza la palabra como instrumento para crear literatura puede referirse también a textos que son escritos para ser hablados, cantados o interpretados.',
    careers: ['Literatura', 'Lingüística'],
    color: Groups.Orden.color,
    title: 'Artístico literario',
    image: 'artistico_literario',
  },
  [Interest.ArtisticoActoral]: {
    description:
      'Las carreras artístico actoral relacionadas a buscar aprender habilidades para las actividades que se integran en el ámbito cultural, como el teatro, la danza , desarrollando habilidades comunicativas y creativas Tener la preparación necesaria para desempeñarte profesionalmente en diversas actividades  del arte y del cine.',
    careers: ['Artes Escénicas', 'Cine', 'Gestión Cultural', 'Danza'],
    color: Groups.Social.color,
    title: 'Artístico actoral',
    image: 'artistico_actoral',
  },
  [Interest.ReligiosoFiolosofico]: {
    description:
      'Las carreras relacionadas al ámbito religioso - filosófico, busca conocer el pensamiento religioso, la teología y los fundamentos filosóficos de las creencias religiosas, la relación entre la fé y la razón, permite estudiar y analizar los distintos ángulos de la religión, se encarga del estudio de la naturaleza de Dios, el origen y las propiedades de la divinidad, se estudian las distintas etapas del pensamiento filosófico y se aprende a pensar de forma crítica y analítica para proponer soluciones a problemas actuales de la sociedad,',
    careers: ['Teología', 'Filosofía'],
    color: Groups.Social.color,
    title: 'Religioso\nfilosófico',
    image: 'religioso_filosofico',
  },
  [Interest.Mecanica]: {
    description:
      'Las carreras relacionadas a las mecánica y transformación se encarga de la creación de equipos y máquinas; para dar garantía del desarrollo tecnológico sostenible, basándose en el diseño, también estudia la construcción, instalación y mantenimiento usando para ellos software de diseño, sin olvidar los materiales, fluidos y energías.',
    careers: ['Ingeniería Mecánica', 'Ingeniería Industrial'],
    color: Groups.Orden.color,
    title: 'Mecánica y\ntransformación',
    image: 'mecanica',
  },
  [Interest.Calculo]: {
    description:
      'Las carreras relacionadas a cálculo permiten mediante un ejercicio matemático establecer la cuenta, la enumeración, permite anticipar el resultados que procederá de ciertos datos, analiza las condiciones del entorno, la tecnología, las formas de organización y el presupuesto con el que deberá contarse en el futuro. ',
    careers: ['Economía', 'Contabilidad', 'Finanzas', 'Matemática'],
    color: Groups.Libertad.color,
    title: 'Cálculo',
    image: 'calculo',
  },
  [Interest.Idiomas]: {
    description:
      'Las carreras relacionadas a idiomas permiten comprender y comunicarse a traves de los aspectos linguísticos, gramaticales y fonológicos de diferentes idiomas, dependiendo de las culturas y del ámbito en que se encuentre, facilitando el entendimiento en la comunicación  al interactuar con otras personas.',
    careers: ['Traducción e Interpretación', 'Idiomas'],
    color: Groups.Libertad.color,
    title: 'Idiomas',
    image: 'idiomas',
  },
  [Interest.Veterinaria]: {
    description:
      'La carrera relacionada a veterinaria busca el cuidado de la salud de los animales como mascotas, ganado, animales de zoológico o silvestres, o de granja, tiene como objetivo prevenir, diagnosticar y curar aquellas afecciones de la salud que presentan los animales, asi como buscar la preservar las especies',
    careers: ['Medicina Veterinaria'],
    color: Groups.Ego.color,
    title: 'Veterinaria',
    image: 'veterinaria',
  },
};
