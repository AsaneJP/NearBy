import { atom } from 'recoil'

export const searchState = atom<Array<number>>({
  key: 'searchState',
  default: [3, 40],
})
