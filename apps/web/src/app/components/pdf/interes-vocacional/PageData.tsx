import { InterestDataProps } from './InterestData';
import { PageEight } from './PageEight';
import { PageSeven } from './PageSeven';
import { PageSix } from './PageSix';

export interface PageDataProps {
  data: InterestDataProps[];
}

export const PageData = (props: PageDataProps) => {
  return (
    <>
      <PageSix {...props.data[0]} />
      <PageSeven {...props.data[1]} />
      <PageEight {...props.data[2]} />
    </>
  );
};
