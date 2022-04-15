import { Module } from 'vuex'
import { SELECTED_MENU, TOGGLE_COLLAPSED } from './types'
import { HomeOutlined } from '@ant-design/icons-vue'

/**
 * 菜单列表
 */
const defaultList: IMenu[] = [
  {
    key: 'index',
    title: '主页',
    url: '/',
    icon: HomeOutlined,
  },
]

export const menu: Module<IMenuState, IRootState> = {
  state: () => ({
    list: defaultList,
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
