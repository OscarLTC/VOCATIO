import { DocType } from './docType.model';
import { Enterprise } from './enterprise.model';
import { Genre } from './genre';

export interface Person {
  id: string;
  name: string;
  lastName: string;
  emailAddress: string;
  docNumber: string;
  phoneNumber: string;
  doc_type: DocType;
  enterprise: Enterprise;
  genre: Genre;
}
