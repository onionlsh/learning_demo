import Mock from 'mockjs';
import data from './data.js';

const BASE_URL = 'http://test.service.heygears.com:23456';

Mock.setup({
  timeout: 300
});

//获取组织列表
Mock.mock(BASE_URL + '/api/org', 'post',(config) => {
  const param = JSON.parse(config.body);
  if(param.userId){
    return {
      code: 200,
      orgList: data.orgList,
      currentOrg: data.currentOrg,
    }
  }else{
    return {
      code: 501,
      data: null,
      msg: '请求参数不能为空'
    }
  }
});

//切换组织
Mock.mock(BASE_URL + '/api/org/change', (config) => {
  console.log('org change request config:',config);
  const param = JSON.parse(config.body);
  if(param.userId && param.orgId){
    return {
      code: 200,
      orgId: param.orgId
    }
  }else{
    return {
      code: 501,
      data: null,
      msg: '请求参数不能为空'
    }
  }
})