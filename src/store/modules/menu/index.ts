import { State } from 'vue'
import { Module } from 'vuex'

/**
 * 菜单列表
 */
const list: IMenu[] = [
  {
    id: 'index',
    name: 'Dashboard',
    url: '/',
  },
]

export const menu: Module<IMenuState, State> = {
  state: () => ({
    list,
  }),
}
