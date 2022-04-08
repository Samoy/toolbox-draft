import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    menu: IMenu
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
