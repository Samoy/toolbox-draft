/**
 * 菜单Model
 */
declare interface IMenu {
  id: string
  name: string
  selcted?: boolean
  collapsed?: boolean
  children?: IMenu[]
}
