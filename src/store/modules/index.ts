import { ModuleTree } from 'vuex'
import { menu } from './menu'
import { theme } from './theme'

export const modules: ModuleTree<IRootState> = {
  menu,
  theme
}
