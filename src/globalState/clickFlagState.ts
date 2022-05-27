import { atom } from 'recoil'

export const clickFlagState = atom<boolean>({
  key: 'clickFlagState',
  default: false,
})
