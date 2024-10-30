export const SurveyDescription = ({ id }: { id: number }) => {
  return (
    <div className="ml-10 my-4 max-w-[620px] md:flex flex-col gap-5 hidden">
      <p className="text-justify">
        {id == 1 &&
          'El test de intereses Vocacionales de VOCATIO, te ayudará a clarificar tus dudas respecto al área y las carreras que explorar para seguir una carrera de estudios superiores.'}
        {id == 2 &&
          'El test de Arquetipos de Personalidad de VOCATIO, te ayudará a conocer cuáles son las motivaciones y deseos, de acuerdo a los tres arquetipos de personalidad que rigen tus actos.'}
        {id == 3 &&
          'El test de Habilidades Blandas de VOCATIO, te ayudará a conocer cuáles son las características que posees al socializar con los demás.'}
        {id == 4 &&
          'El test de Inteligencias Múltiples de VOCATIO, te ayudará a conocer cuáles son las inteligencias que predomina en ti y con ello poder explorar en base a tus habilidades y recursos mejor desarrollados.'}
        {id == 6 &&
          'El test de Estilos de Aprendizaje de VOCATIO, te ayudará a conocer cuál es el estilo de mayor predominio al momento de aprender, lo cual te servirá para recibir recomendaciones que te ayuden en tu trabajo académico.'}
        {id == 7 &&
          'El test de Hábitos de Estudio de VOCATIO, te ayudará a conocer cuáles son las características de tu trabajo al estudiar y por consiguiente aprender.'}
      </p>
      <p className="text-justify">
        {id == 1 &&
          'A continuación, encontrarás una serie de frases que describen actividades profesionales, debajo de cada una ellas encontrarás 4 preguntas con 5 alternativas de respuesta, representadas a través de caras (coloca el cursor para ver las alternativas siguientes):'}
        {id == 2 &&
          'A continuación, encontrarás una serie de frases que están relacionadas a tu forma de pensar, sentir y actuar. Debajo de cada una ellas encontrarás 5 alternativas de respuesta, representadas a través de caras (coloca el cursor para ver las alternativas siguientes):'}
        {id == 3 &&
          'A continuación, encontrarás una serie de frases que están relacionadas a tu forma de pensar, sentir y actuar. Debajo de cada una ellas encontrarás 5 alternativas de respuesta, representadas a través de caras (coloca el cursor para ver las alternativas siguientes):'}
        {id == 4 &&
          'A continuación, encontrarás una serie de frases que están relacionadas a tu forma de pensar, sentir y actuar. Debajo de cada una ellas encontrarás 4 alternativas de respuesta, representadas a través de caras (coloca el cursor para ver las alternativas siguientes):'}
        {id == 6 &&
          'A continuación, encontrarás una serie de frases que tienen tres opciones de respuesta. Recuerda responder a todas las preguntas con sinceridad. No hay respuestas correctas o incorrectas, escoge las respuestas que más se ajusten a tu manera de trabajar.'}
        {id == 7 &&
          'A continuación, encontrarás una serie de frases que están relacionadas a tu forma de pensar, sentir y actuar al momento de estudiar. Debajo de cada una ellas encontrarás 2 alternativas de respuesta:'}
      </p>
      {(id == 1 || id == 2 || id == 3) && (
        <div className="flex flex-col text-center mb-5">
          <span>TOTALMENTE DE ACUERDO</span>
          <span>MEDIANAMENTE DE ACUERDO</span>
          <span>NI DE ACUERDO, NI EN DESACUERDO</span>
          <span>MEDIANAMENTE EN DESACUERDO</span>
          <span>TOTALMENTE EN DESACUERDO</span>
        </div>
      )}
      {id == 4 && (
        <div className="flex flex-col text-center mb-5">
          <span>TOTALMENTE DE ACUERDO</span>
          <span>MEDIANAMENTE DE ACUERDO</span>
          <span>MEDIANAMENTE EN DESACUERDO</span>
          <span>TOTALMENTE EN DESACUERDO</span>
        </div>
      )}
      {id == 7 && (
        <div className="flex flex-col text-center mb-5">
          <span>
            DEDO ARRIBA (SI) - Si la frase responde a tu manera de trabajar
          </span>
          <span>
            DEDO ABAJO (NO) - Si la frase no responde a tu manera de trabajar
          </span>
        </div>
      )}
      <p className="text-justify">
        {id == 1 &&
          'Recuerda responder a todas las preguntas con sinceridad. No hay respuestas correctas o incorrectas, escoge las respuestas que reflejen tu real manera de pensar.'}
        {(id == 2 || id == 3 || id == 4) &&
          'Recuerda responder a todas las preguntas con sinceridad. No hay respuestas correctas o incorrectas, escoge las respuestas que mejor se ajusten a tu manera de ser.'}
        {id == 7 &&
          'Recuerda responder a todas las preguntas con sinceridad.\nNo hay respuestas correctas o incorrectas.'}
      </p>
    </div>
  );
};
