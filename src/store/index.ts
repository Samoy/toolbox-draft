import { State } from 'vue'
import { createStore, createLogger } from 'vuex'
import { menu } from './modules/menu'

const debug = process.env.NODE_ENV !== 'production'

export default createStore<State>({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  modules: {
    menu,
  },
})
