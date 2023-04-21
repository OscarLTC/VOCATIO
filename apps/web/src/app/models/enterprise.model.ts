import { BussinesLine } from './bussinesLine.model';

export interface Enterprise {
  id: string;
  name: string;
  contactName: string;
  phoneContact: string;
  emailContact: string;
  bussines_line: BussinesLine;
}
