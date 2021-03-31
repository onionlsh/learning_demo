import Vue from 'vue'
import Vuex from 'vuex'
import Socket from './modules/socket';
import User from './modules/user';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Socket,
    User
  }
})
