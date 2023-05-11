import { Alternative } from './alternative.model';

export interface Question {
  id: string;
  description: string;
  alternative: Array<Alternative>;
}
