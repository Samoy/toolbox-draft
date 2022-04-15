import { Module } from 'vuex'
import { TOGGLE_THEME } from './types'

const defaultType: ThemeType = 'light'

export const theme: Module<IThemeState, IRootState> = {
  state: () => ({
    type: defaultType,
  }),
  mutations: {
    [TOGGLE_THEME]: (state, payload: ThemeType) => {
      state.type = payload
    },
  },
}
