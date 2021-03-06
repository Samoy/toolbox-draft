declare interface IMenu {
  key: string
  title: string
  url?: string
  icon?: import('vue').FunctionalComponent<
    import('@ant-design/icons-vue/lib/components/AntdIcon').AntdIconProps
  >
  component?: import('vue').Component
  children?: IMenu[]
}

declare interface IMenuState {
  list: IMenu[]
  /**
   * 当前选中菜单
   */
  selectedKeys?: string[]
  /**
   * 是否折叠菜单
   */
  collapsed: boolean
}
