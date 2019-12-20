const getters = {
  sidebar: state => state.app.sidebar,
  lang: state => state.app.lang,
  language: state => state.app.language,
  orgList: state => state.user.orgList,
  userInfo: state => state.user.userInfo,
  userId: state => state.user.userInfo.userId,
  currentOrg: state => state.user.currentOrg,
  menus: state => state.menu.menus,

  changeLanguage: state => state.app.changeLanguage,
  initUserInfo: state => state.user.initUserInfo,
  setOrgList: state => state.user.setOrgList,
  setCurrentOrg: state => state.user.currentOrg,
}

export default getters;