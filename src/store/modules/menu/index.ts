import { Module } from 'vuex'

/**
 * 菜单列表
 */
const list: IMenu[] = [
  {
    id: 'index',
    title: 'Dashboard',
    url: '/',
  },
]

export const menu: Module<IMenuState, IRootState> = {
  state: () => ({
    list,
    selectedKeys: [],
    openKeys: ['index'],
    collapsed: false,
  }),
  mutations: {
    toggleCollapsed(state) {
      state.collapsed = !state.collapsed
    },
  },
}
