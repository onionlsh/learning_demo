import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import menu from './modules/menu'
import getters from './getters'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'producion'

export default new Vuex.Store({
  modules:{
    app,
    user,
    menu,
  },
  getters,
  strict: debug
})