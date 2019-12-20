/**
 * 菜单数据
 */
const menuData = () => {
  let menuList = [];
  menuList.push({
    "code": 10000,
    "name": '组织管理',
    "path": '/org',
    "component": 'org',
    "dropdown": true,
    "icon": '',
    "children": [{
      "code": 10001,
      "name": '我的组织',
      "path": '/org/my',
      "component": 'org/myOrg',
      "dropdown": false,
      "icon": '',
    },{
      "code": 10002,
      "name": '组织架构',
      "path": '/org/structure',
      "component": 'org/structure',
      "dropdown": false,
      "icon": '',
    },{
      "code": 10003,
      "name": '我的关联',
      "path": '/org/relate',
      "component": 'org/relate',
      "dropdown": false,
      "icon": '',
    },{
      "code": 10004,
      "name": '组织审核',
      "path": '/org/examine',
      "component": 'org/examine',
      "dropdown": false,
      "icon": '',
    }]
  });
  menuList.push({
    "code": 20000,
    "name": '角色管理',
    "path": '/role',
    "component": 'role',
    "dropdown": false,
    "icon": '',
  });
  menuList.push({
    "code": 30000,
    "name": '日志管理',
    "path": '/logs',
    "component": 'logs',
    "dropdown": true,
    "icon": '',
    "children":[{
      "code": 30001,
      "name": '登录日志',
      "path": '/logs/login',
      "component": 'logs/login',
      "dropdown": false,
      "icon": '',
    },{
      "code": 30002,
      "name": '操作日志',
      "path": '/logs/operate',
      "component": 'logs/operate',
      "dropdown": false,
      "icon": '',
    }]
  });
  menuList.push({
    "code": 40000,
    "name": '参数管理',
    "path": '/dict',
    "component": 'dict',
    "dropdown": true,
    "icon": '',
    "children":[{
      "code": 40001,
      "name": '组织类型',
      "path": '/dict/org',
      "component": 'dict/org',
      "dropdown": false,
      "icon": '',
    },{
      "code": 40002,
      "name": '业务类型',
      "path": '/dict/service',
      "component": '/dict/service',
      "dropdown": false,
      "icon": '',
    }]
  });
  menuList.push({
    "code": 50000,
    "name": '公告管理',
    "path": '/notice',
    "component": '/notice',
    "dropdown": false,
    "icon": '',
  });
  return menuList;
}


const menuList = [{
  id: '2019001',
  menus: [{
    "code": 10000,
    "zhName": '组织管理',
    "cnName": 'Organization Manage',
    "path": '/org',
    "component": 'org',
    "dropdown": true,
    "icon": '',
    "children": [{
      "code": 10001,
      "zhName": '我的组织',
      "cnName": 'My Organization',
      "path": '/org/my',
      "component": 'org/myOrg',
      "dropdown": false,
      "icon": '',
    },{
      "code": 10002,
      "zhName": '组织架构',
      "cnName": 'Structure',
      "path": '/org/structure',
      "component": 'org/structure',
      "dropdown": false,
      "icon": '',
    },{
      "code": 10003,
      "zhName": '我的关联',
      "cnName": 'My Relation',
      "path": '/org/relate',
      "component": 'org/relate',
      "dropdown": false,
      "icon": '',
    },{
      "code": 10004,
      "zhName": '组织审核',
      "cnName": 'Examine',
      "path": '/org/examine',
      "component": 'org/examine',
      "dropdown": false,
      "icon": '',
    }]
  },{
    "code": 20000,
    "zhName": '角色管理',
    "cnName":'Role Manage',
    "path": '/role',
    "component": 'role/role',
    "dropdown": false,
    "icon": '',
  },{
    "code": 30000,
    "zhName": '日志管理',
    "cnName":'Logs Manage',
    "path": '/logs',
    "component": 'logs',
    "dropdown": true,
    "icon": '',
    "children":[{
      "code": 30001,
      "zhName": '登录日志',
      "cnName":'Login Logs',
      "path": '/logs/login',
      "component": 'logs/login',
      "dropdown": false,
      "icon": '',
    },{
      "code": 30002,
      "zhName": '操作日志',
      "cnName": 'Operate',
      "path": '/logs/operate',
      "component": 'logs/operate',
      "dropdown": false,
      "icon": '',
    }]
  },{
    "code": 40000,
    "zhName": '参数管理',
    "cnName": 'Dict Manage',
    "path": '/dict',
    "component": 'dict',
    "dropdown": true,
    "icon": '',
    "children":[{
      "code": 40001,
      "zhName": '组织类型',
      "cnName": 'Department Type',
      "path": '/dict/org',
      "component": 'dict/org',
      "dropdown": false,
      "icon": '',
    },{
      "code": 40002,
      "zhName": '业务类型',
      "cnName": 'Service Type',
      "path": '/dict/service',
      "component": 'dict/service',
      "dropdown": false,
      "icon": '',
    }]
  },{
    "code": 50000,
    "zhName": '公告管理',
    "cnName": 'Notice Manage',
    "path": '/notice',
    "component": 'notice/notice',
    "dropdown": false,
    "icon": '',
  }]
},{
  id: '2019002',
  menus:[{
    "code": 10000,
    "zhName": '组织管理',
    "cnName": 'Organization Manage',
    "path": '/org',
    "component": 'org',
    "dropdown": true,
    "icon": '',
    "children": [{
      "code": 10001,
      "zhName": '我的组织',
      "cnName": 'My Organization',
      "path": '/org/my',
      "component": 'org/myOrg',
      "dropdown": false,
      "icon": '',
    },{
      "code": 10002,
      "zhName": '组织架构',
      "cnName": 'Structure',
      "path": '/org/structure',
      "component": 'org/structure',
      "dropdown": false,
      "icon": '',
    },{
      "code": 10003,
      "zhName": '我的关联',
      "cnName": 'My Relation',
      "path": '/org/relate',
      "component": 'org/relate',
      "dropdown": false,
      "icon": '',
    }]
  },{
    "code": 30000,
    "zhName": '日志管理',
    "cnName":'Logs Manage',
    "path": '/logs',
    "component": 'logs',
    "dropdown": true,
    "icon": '',
    "children":[{
      "code": 30002,
      "zhName": '操作日志',
      "cnName": 'Operate',
      "path": '/logs/operate',
      "component": 'logs/operate',
      "dropdown": false,
      "icon": '',
    }]
  },{
    "code": 40000,
    "zhName": '参数管理',
    "cnName": 'Dict Manage',
    "path": '/dict',
    "component": 'dict',
    "dropdown": true,
    "icon": '',
    "children":[{
      "code": 40001,
      "zhName": '组织类型',
      "cnName": 'Department Type',
      "path": '/dict/org',
      "component": 'dict/org',
      "dropdown": false,
      "icon": '',
    },{
      "code": 40002,
      "zhName": '业务类型',
      "cnName": 'Service Type',
      "path": '/dict/service',
      "component": '/dict/service',
      "dropdown": false,
      "icon": '',
    }]
  },{
    "code": 50000,
    "zhName": '公告管理',
    "cnName": 'Notice Manage',
    "path": '/notice',
    "component": '/notice',
    "dropdown": false,
    "icon": '',
  }]
}]

export default {
  menuData,
  menuList,
}