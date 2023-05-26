import { atom } from 'recoil';
import { localStorageEffect } from '../effect';

export const userState = atom<any>({
  key: 'userState',
  default: null,
  effects_UNSTABLE: [localStorageEffect('vocatioUser')],
});
