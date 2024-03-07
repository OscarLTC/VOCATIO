import { DocType } from './doctype.model';
import { Enterprise } from './enterprise.model';

export interface Person {
  id: string;
  name: string;
  lastName: string;
  emailAddress: string;
  docNumber: string;
  phoneNumber: string;
  doc_type: DocType;
  enterprise: Enterprise;
}
