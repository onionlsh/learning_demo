/**
 * 菜单相关数据
 */
import {getStore} from '@/utils/storage.js';

const menu = {
  state : {
    menus:JSON.parse(getStore('menuData'))||[],
  },

  mutations: {
  INIT_MENU: (state, menuList) => {
    state.menus = menuList;
  }
  },

  actions: {
  initMenu: ({commit}, menuList) => {
    commit('INIT_MENU',menuList)
  }
  }
}

export default menu;