import { atom } from 'recoil';
import { DocType } from '../../models/docType.model';

export const doctypeState = atom<any>({
  key: 'doctypeState',
  default: null,
});
