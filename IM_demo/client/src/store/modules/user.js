
const state = {
  userInfo: {
    id: new Date().getTime(),
    name: 'admin'+ new Date().getTime(),
  },
  userCode: 100010,
};

const getters = {
  userInfo: state => state.userInfo,
  userCode: state => state.userCode
};

const actions = {

};

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
};