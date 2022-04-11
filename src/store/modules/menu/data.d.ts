declare interface IMenu {
  id: string
  title: string
  url?: string
  children?: IMenu[]
}

declare interface IMenuState {
  list: IMenu[]
  /**
   * 当前选中菜单
   */
  selectedKeys?: string[]
  /**
   * 当前打开菜单
   */
  openKeys?: string[]
  /**
   * 是否折叠菜单
   */
  collapsed: boolean
}
