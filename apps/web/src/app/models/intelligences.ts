enum Intelligence {
  Interpersonal = 'Interpersonal',
  LinguisticoVerbal = 'Lingüística - Verbal',
  LogicoMatematica = 'Lógico - Matemática',
  Natural = 'Natural',
  VisualEspacial = 'Visual - Espacial',
  Intrapersonal = ' ',
  KinestesicaCorporal = 'Kinestésica - Corporal',
  Musical = 'Musical',
}

export const IntelligenceData = {
  [Intelligence.LinguisticoVerbal]: {
    text1:
      'La poseen por lo general, los escritores, los poetas, los buenos redactores. Utiliza tanto el hemisferio izquierdo como el derecho del cerebro.',
    text2:
      'Es de gran apoyo el aprendizaje por proyectos o el trabajo colaborativo donde tengas que hacer uso de la experesión verbal y otros medios comunicativos.',
    image: 'linguistico_verbal',
    indicators: [
      'Lees por placer y no sólo por obligación.',
      'Escribes con gusto composiciones, cartas, artículos.',
      'Lengua e Historia te resultan más fáciles que Matemática, Física y Química.',
      'Recuerdas con facilidad ideas, frases, conceptos.',
      'Coleccionas poesías o frases que te gustan.',
      'Entiendes con facilidad lo que lees.',
      'Encuentras con facilidad las palabras para expresarte.',
      'Captas más información escuchando radio o similar que viendo la televisión.',
      'En auto prestas más atención a lo que dicen los carteles que al paisaje.',
      'Escribes a menudo tus pensamientos o ideas en diarios o notas.',
    ],
    title: 'Lingüístico - Verbal',
    description:
      'La inteligencia lingüística-verbal es la capacidad de entender y de producir mensajes orales o escritos. Las personas como los líderes políticos, los escritores o los profesionales de la enseñanza la poseen en un grado de desarrollo superior. Las personas que destacan en la inteligencia lingüística-verbal disfrutan especialmente con actividades que incluyen historias, debates, diálogos, chistes, lecturas.',
  },
  [Intelligence.LogicoMatematica]: {
    text1:
      'La utilizamos para resolver problemas de lógica y matemáticas. Es la inteligencia que tienen los científicos. Se corresponde con el modo de pensamiento del  hemisferio lógico y con lo que nuestra cultura ha considerado siempre como la única inteligencia.',
    text2:
      'Son de gran utilidad los ejercicios de lógica-matemática, juegos de serie, la calificación de procesos o secuencias  y la correspondencia en las respuestas ya sean ejercicios lógicos o matemáticos.',
    image: 'logico_matematico',
    indicators: [
      'Te gustan los juegos que desafían el pensamiento, ajedrez, 3 en raya etc.',
      'Cuando piensas lo haces siguiendo el orden lógico de lo que ha pasado.',
      'Te gustan los experimentos y piensas ¿qué pasaría sí?',
      'Crees que todo tiene una explicación racional.',
      'Puedes pensar en conceptos abstractos, sin palabras ni imágenes.',
      'Te interesan los descubrimientos científicos nuevos.',
      'Te gusta encontrar defectos lógicos en lo que dicen o hacen las personas.',
      'Calculas cantidades mentalmente con facilidad.',
      'Te sientes más cómodo cuando algo ha sido medido o clasificado de algún modo.',
    ],
    title: 'Lógico - Matemática',
    description:
      'La inteligencia lógica-matemática está estrechamente vinculada a la capacidad de razonamiento, de secuenciación y de creación de hipótesis. En su grado máximo de desarrollo se identifica con el pensamiento científico.',
  },
  [Intelligence.VisualEspacial]: {
    text1:
      'Esta inteligencia consiste en formar un modelo mental del mundo en tres dimensiones. Es la inteligencia que tienen los marineros, los ingenieros, los cirujanos, los escultores,  los arquitectos, los decoradores, etc.',
    text2:
      'Los laberintos, unir las líneas de puntos y buscar diferencias son excelentes para desarrollar las habilidades visuales.',
    image: 'visual_espacial',
    indicators: [
      'Sacas fotos o videos frecuentemente.',
      'Te orientas con facilidad en sitios nuevos.',
      "Sueles hacer 'dibujos' a la vez que otra cosa (ejemplo, hablar por teléfono, en clase).",
      'Te fijas mucho en los colores al elegir ropa, arreglar el cuarto etc.',
      'Prefieres leer libros con dibujos.',
      'Usas mapas con facilidad.',
      'Entiendes mejor las explicaciones con ayuda de gráficos, dibujos.',
      'Puedes imaginarte cómo verías una cosa desde arriba, a vista de pájaro.',
      'Resuelves a gusto rompecabezas, puzles, laberintos.',
      'Cuando cierras los ojos a menudo ves imágenes claras.',
      'Te encuentras a gusto en clases / temas de Matemáticas y Ciencias.',
    ],
    title: 'Visual - Espacial',
    description:
      'La inteligencia espacial se define como la capacidad de crear modelos mentales, la misma que se requiere para visualizar rutas o comprender los mapas. Es también la capacidad de la que hace uso el lector mientras que está leyendo la descripción de un lugar y se crea una imagen mental del mismo.',
  },
  [Intelligence.KinestesicaCorporal]: {
    text1:
      'Relacionada a la capacidad de utilizar el propio cuerpo para realizar actividades o resolver problemas. Es la inteligencia de los deportistas, los artesanos, los cirujanos y los bailarines, etc.',
    text2:
      'Son excelentes las actividades que requieran movimientos físicos, juegos, actuación, baile, deportes, manualidades como artesanía, pintura y ejercicios.',
    image: 'kinestesica_corporal',
    indicators: [
      'Te sientes mejor al aire libre.',
      'Disfrutas con cosas manuales: dibujar, construir, cocinar, tejer, manualidades.',
      'Prefieres practicar actividades físicas, más que leer o ver sobre ellas.',
      'Realizas algún deporte o actividad física.',
      'Te resulta difícil estar sentado durante periodos largos.',
      'Te vienen buenas ideas mientras caminas, corres o haces una actividad física.',
      'Usas el cuerpo, gestos, cuando hablas.',
      'Necesitas tocar las cosas para saber más de ellas.',
      'Sientes que te mueves con agilidad, coordinación y equilibrio.',
      'Disfrutas en actividades arriesgadas o acciones que te enfrentan al peligro.',
    ],
    title: 'Kinestésica - Corporal',
    description:
      'La inteligencia kinestésica - corporal es la habilidad del uso del cuerpo para la expresión, también se refiere al manejo de objetos físicos con destreza. En la literatura clásica se refleja en la expresión mente sana en cuerpo sano que hace referencia a la habilidad de cultivar el poder mental. ',
  },
  [Intelligence.Musical]: {
    text1:
      'Naturalmente, es la inteligencia relacionada a los cantantes, compositores, músicos, etc.',
    text2:
      'Es importante, atender a los sonidos cotidianos y del entorno,  Cantar diferentes canciones de distintos géneros , silbar o tararear y finalmente aprender a tocar algún instrumento.',
    image: 'musical',
    indicators: [
      'Tienes una voz agradable para cantar.',
      'Distingues si alguien desentona al cantar.',
      'Te sientes bien escuchando música.',
      'Conoces la melodía de muchas canciones.',
      'Sigues con facilidad el ritmo de una canción con algún instrumento de percusión.',
      'Vas a escuchar conciertos o recitales y grabas la música que te gusta.',
      'Oyes una o dos veces una pieza musical y puedes cantarla con bastante precisión.',
      'A veces por la calle llevas en la cabeza una canción o melodía de TV.',
      'A menudo tamborileas o canturreas mientras haces otra cosa.',
      'Tocas algún instrumento.',
    ],
    title: 'Musical',
    description:
      'La inteligencia musical es la capacidad de percibir, apreciar y producir ritmos y melodías. Trabajar, por ejemplo, con canciones o con textos sonorizados musicalmente ayuda a mejorar la pronunciación, a la vez que los efectos musicales permiten la concentración y la conexión con el yo, la estimulación de procesos creativos, el aislamiento sonoro o la creación de un ambiente de aula relajado pero productivo.',
  },
  [Intelligence.Interpersonal]: {
    text1:
      'Esta inteligencia nos permite entender a los demás, y la solemos encontrar en los vendedores, políticos, profesores o psicòlogos.',
    text2:
      'Aprender a escuchar a los demás, participar en actividades sociales, resolver o ser participe en solución de conflictos,ser empático, conocer a nuevas personas.',
    image: 'interpersonal',
    indicators: [
      'Te gusta enseñar a alguien cómo se hace algo.',
      'Necesitas charlar con alguien sobre tus problemas.',
      'Los conocidos acuden a ti si tienen un problema.',
      'Disfrutas entreteniendo a otros y organizando cosas.',
      'Prefieres ir a una fiesta antes que quedarte solo.',
      'Disfrutas al compartir los hobbies con tus amigos.',
      'Prefieres los trabajos y deportes en equipo.',
      'Tienes cierta influencia sobre el grupo en que actúas.',
      'Tienes más de un amigo cercano.',
      'Te sientes cómodo cuando estás con mucha gente.',
    ],
    title: 'Interpersonal',
    description:
      'La inteligencia interpersonal se define como la capacidad de percibir, transformar y activar las relaciones con los demás. Es característica de los líderes, aunque todas las personas se necesitan para trabajar de forma cooperativa o simplemente para convivir en armonía.',
  },
  [Intelligence.Intrapersonal]: {
    text1:
      'Esta inteligencia nos permite entendernos a nosotros mismos. No está asociada a ninguna actividad concreta, pues es más de tipo introspectivo. ',
    text2:
      'Practicar la autoevaluación identificando tus habilidades y debililidades, aprender a indentificar las emociones, juegos de roles, identificar los propios sentimientos.',
    image: 'intrapersonal',
    indicators: [
      'Te gusta enseñar a alguien cómo se hace algo.',
      'Necesitas charlar con alguien sobre tus problemas.',
      'Los conocidos acuden a ti si tienen un problema.',
      'Disfrutas entreteniendo a otros y organizando cosas.',
      'Prefieres ir a una fiesta antes que quedarte solo.',
      'Disfrutas al compartir los hobbies con tus amigos.',
      'Prefieres los trabajos y deportes en equipo.',
      'Tienes cierta influencia sobre el grupo en que actúas.',
      'Tienes más de un amigo cercano.',
      'Te sientes cómodo cuando estás con mucha gente.',
    ],
    title: 'Intrapersonal',
    description:
      'La inteligencia intrapersonal se fundamenta en el don de conocerse a sí mismo y en la capacidad de poder actuar sobre sus propias emociones. Recordar la propia apariencia cuando se era menor, controlar la ira, expresar sentimientos sin herir a otras personas o estudiar apoyándose de su propio estilo de aprendizaje son momentos en los que se utiliza esta inteligencia. Esta inteligencia incita a la reflexión, la visualización, el auto descubrimiento y el conocimiento personal.',
  },
  [Intelligence.Natural]: {
    text1:
      'Esta inteligencia es la que utilizamos cuando observamos y estudiamos la naturaleza. Es la que demuestran los biólogos, los veterinarios, los herbolarios, etc.',
    text2:
      'Observar el desarrollo de una planta o animal de manera práctica. Detectar y analizar problemas medioambientales en el entorno.',
    image: 'natural',
    indicators: [
      'Sueles mirar, escuchar, tocar aquello que no conoces.',
      'Te gusta preguntarte cómo funcionan las cosas.',
      'A menudo te preguntas cómo son los aparatos por dentro.',
      'Sueles comparar sucesos y cosas para ver qué tienen en común.',
      'Te gustaría aprender más cosas sobre la naturaleza.',
      'Tienes conocimiento sobre temas de la naturaleza: animales, plantas, montañas, etc.',
      'Los temas relacionados con la ecología, los animales y las plantas son los que más te gustan.',
      "Sueles preguntarte 'qué pasaría si' cuando piensas en algo nuevo.",
      'Te diviertes haciendo experimentos y comprobando qué pasa.',
    ],
    title: 'Natural',
    description:
      'La inteligencia naturalista consiste en la capacidad de reconocer, disfrutar con y tratar a las distintas especies naturales y animales. Es la habilidad para distinguir entre las distintas especies de flora y fauna, incluye la sensibilidad ecológica, la habilidad para disfrutar del mundo natural. Aportar ideas sobre cómo contaminar menos es una tarea que se puede llevar a cabo en el aula y que activa esta inteligencia.',
  },
};
