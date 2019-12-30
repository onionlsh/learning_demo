const { orgListData, orgData } = require("./data.json");

//根据用户Id获取组织列表
const getOrgListByUserId = userId => {
  let orgList = [];
  orgListData.forEach(item => {
    if (item.userId === userId) {
      orgList = item.orgList;
    }
  });
  return orgList;
};

//根据用户Id获取当前组织信息
const getOrgByUserId = userId => {
  let currentOrg = {};
  orgData.forEach(item => {
    if (item.userId === userId) {
      currentOrg = item.currentOrg;
    }
  });
  return currentOrg;
};

//根据组织ID获取信息
const getOrgById = (orgId, userId) => {
  let currentOrg = {};
  orgListData.forEach(item => {
    if (item.userId == userId) {
      item.orgList.forEach(org => {
        if (org.id == orgId) {
          currentOrg = org;
        }
      });
    }
  });
  return currentOrg;
};

module.exports = {
  getOrgById,
  getOrgByUserId,
  getOrgListByUserId,
}