const { menuList } = require('./data.json');

//获取菜单列表
const getMenuById = (orgId, userId) => {
  let menuData = [];
  menuList.forEach(item => {
    if (item.orgId == orgId && item.userId == userId) {
      menuData = item.menus;
    }
  });

  return menuData;
};

module.exports = {
  getMenuById
}