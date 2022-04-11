declare interface IMenu {
  id: string
  name: string
  selcted?: boolean
  collapsed?: boolean
  url?: string
  children?: IMenu[]
}

declare interface IMenuState {
  list: IMenu[]
}
