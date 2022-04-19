import * as VueRouter from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import { menuList } from '../store/modules/menu'

/**
 * 生成路由列表
 */
const genRoutes = (menus: IMenu[]): RouteRecordRaw[] => {
  let routes: RouteRecordRaw[] = []
  function generate(menuList: IMenu[]) {
    menuList.forEach((menu) => {
      if (menu.children) {
        generate(menu.children)
      }
      if (menu.url !== undefined && menu.component !== undefined) {
        routes.push({
          name: menu.title,
          path: menu.url,
          component: menu.component,
        })
      }
    })
  }
  generate(menus)

  return routes
}

/**
 * 导出路由
 */
export const router = VueRouter.createRouter({
  routes: genRoutes(menuList),
  history: VueRouter.createWebHashHistory(),
})
