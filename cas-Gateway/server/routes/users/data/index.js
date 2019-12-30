let {userList} = require('./data.json')

//查找登录对象
const getUserByCode = userCode => {
  let respData = {};
  userList.forEach(item => {
    if (item.userCode == userCode) {  //方便模拟数据查找
      const {token, user} = item;
      respData = {
        token, 
        userId: user.userInfo.userId,
        orgId: user.userInfo.org && user.userInfo.org.id || null
      };
      return;
    }
  });
  return respData;
};

const getUserById = userId => {
  let userInfo = {};
  userList.forEach(user => {
    if (user.id === Number(userId)) {
      userInfo = user.user;
      return;
    }
  });
  return userInfo;
};

module.exports = {
  getUserByCode,
  getUserById
};