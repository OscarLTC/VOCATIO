import React from 'react';
import { PageFive, PageFiveProps } from './PageFive';
import { PageSix, PageSixProps } from './PageSix';
export const indicators = [
  'Te gusta enseñar a alguien cómo se hace algo.',
  'Necesitas charlar con alguien sobre tus problemas.',
  'Los conocidos acuden a ti si tienen un problema.',
  'Disfrutas entreteniendo a otros y organizando cosas.',
  'Prefieres ir a una fiesta antes que quedarte solo.',
  'Disfrutas al compartir los hobbies con mis amigos.',
  'Prefieres los trabajos y deportes en equipo.',
  'Tienes cierta influencia sobre el grupo en que actúas.',
  'Tienes más de un amigo cercano.',
  'Te sientes cómodo cuando estas con mucha gente.',
];

export interface PageDataProps {
  data: PageFiveProps & PageSixProps;
}

export const PageData = (props: PageDataProps) => {
  return (
    <>
      <PageFive
        title={props.data.title}
        image={props.data.image}
        indicators={props.data.indicators}
        description={props.data.description}
      />
      <PageSix text1={props.data.text1} text2={props.data.text2} />
    </>
  );
};
