import { getCookie } from '../../public/utils/cookie';
import { parseJson } from '../../public/utils/common';

const sockets = parseJson(getCookie('sockets')) || {};

const state = {
  sockets: sockets,
  chats: [],
};

const getters = {
  sockets: state => state.sockets,
  chats: state => state.chats
};

const mutations = {
  // 添加socket对象
  ADD_SOCKET : (state, {orderCode, socket}) => {
    state.sockets[orderCode] = socket;
  },

  // 添加聊天记录
  ADD_CHATS : (state, {orderCode, msg}) => {
    if(!state.chats[orderCode]){
      state.chats[orderCode] = [];
    }
    state.chats[orderCode].push(msg);
  },
};

const actions = {
  addSocket: ({commit}, {orderCode, socket}) => {
    commit('ADD_SOCKET', {orderCode, socket});
  },
  addChats: ({commit}, {orderCode, msg}) => {
    commit('ADD_CHATS', {orderCode, msg});
  },

};

export default {
  state,
  getters,
  mutations,
  actions
}
