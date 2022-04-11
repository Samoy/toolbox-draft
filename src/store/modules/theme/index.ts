import { Module } from 'vuex'

const themeName = 'dark'

export const theme: Module<string, IRootState> = {
  state: () => themeName,
}
