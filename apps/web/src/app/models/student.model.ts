import { DocType } from './doctype.model';

export interface Student {
  id: string;
  name: string;
  lastName: string;
  emailAddress: string;
  doc_type: DocType;
  docNumber: string;
  phoneNumber: string;
}
