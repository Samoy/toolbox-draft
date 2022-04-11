import { State } from 'vue'
import { ModuleTree } from 'vuex'
import { menu } from './menu'

export const modules: ModuleTree<State> = {
  menu,
}
