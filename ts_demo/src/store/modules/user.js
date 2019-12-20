/* 用户信息 */
const user = {
  state: {
    userInfo:{
      userId: null,
      userName: '',
      userCode: '',
    },
    orgList: [],  //用户拥有的组织列表
    currentOrg: {                                                        //当前组织
      id: '',
      cnName: '',
      znName: ''
    },
  },

  mutations: {
    INIT_USER_INFO: (state, user) => {  //初始化登录用户信息
      state.userInfo = user;
    },
    SET_ORG_LIST: (state, orgList) => {
      state.orgList = orgList;
    },
    SET_CURRENT_ORG: (state, org) => {
      state.currentOrg = {
        id: org.id,
        cnName: org.cnName,
        zhName: org.zhName,
      }
    },
  },

  actions: {
    initUserInfo: ({commit}, user) => {
      commit('INIT_USER_INFO', user);
    },
    setOrgList: ({commit}, orgList) => {
      commit('SET_ORG_LIST', orgList);
    },
    setCurrentOrg: ({commit}, org) => {
      commit('SET_CURRENT_ORG', org);
    },
  }
}

export default user;