import { Module } from 'vuex'
import { SELECTED_MENU, TOGGLE_COLLAPSED } from './types'
import { HomeOutlined } from '@ant-design/icons-vue'
import Index from '../../../pages/Index.vue'
import StringReverse from '../../../pages/StringReverse.vue'

/**
 * 菜单列表
 */
export const menuList: IMenu[] = [
  {
    key: 'index',
    title: '主页',
    url: '/',
    icon: HomeOutlined,
    component: Index,
  },
  {
    key: 'string',
    title: '字符串',
    children: [
      {
        key: 'reverse',
        title: '字符串倒序',
        url: '/string/reverse',
        component: StringReverse,
      },
    ],
  },
]

export const menu: Module<IMenuState, IRootState> = {
  state: () => ({
    list: menuList,
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
