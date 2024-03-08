import { BussinesLine } from './bussinesLine.model';

export interface Enterprise {
  id: number;
  name: string;
  contactName: string;
  phoneContact: string;
  emailContact: string;
  bussines_line: BussinesLine;
}
