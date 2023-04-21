import { atom } from 'recoil';

export const peopleState = atom<any>({
  key: 'peopleState',
  default: null,
});
