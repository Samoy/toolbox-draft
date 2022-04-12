import { Module } from 'vuex'
import { SELECTED_MENU, TOGGLE_COLLAPSED } from './types'

/**
 * 菜单列表
 */
const list: IMenu[] = [
  {
    key: 'index',
    title: '主页',
    url: '/',
  },
]

export const menu: Module<IMenuState, IRootState> = {
  state: () => ({
    list,
    selectedKeys: ['index'],
    collapsed: false,
  }),
  mutations: {
    [TOGGLE_COLLAPSED](state) {
      state.collapsed = !state.collapsed
    },
    [SELECTED_MENU](state, key: string) {
      state.selectedKeys = [key]
    },
  },
}
