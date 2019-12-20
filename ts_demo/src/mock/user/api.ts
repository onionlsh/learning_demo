import Mock from 'mockjs';
import data from './data.js';

const BASE_URL = 'http://test.service.heygears.com:23456';

Mock.setup({
  timeout: 300
});

//登录
Mock.mock(BASE_URL+'/api/login', 'post', (config) => {
  const param = JSON.parse(config.body);
  if(param.password && param.userCode){
    return {
      code: 200,
      data: {
        userId: data.userInfo.userId,
        orgId: '2019001'
      }
    }
  }else{
    return {
      code: 501,
      data: null,
      msg: '请求参数不能为空'
    }
  }
});

//注销
Mock.mock(BASE_URL + '/api/logout', 'post', (config) => {
  const param = JSON.parse(config.body);
  if(param.userId){
    return {
      code:200
    }
  }else{
    return {
      code: 501,
      msg: '登出失败'
    }
  }
});

//获取用户信息
Mock.mock(BASE_URL + '/api/user', 'post', (config) => { 
  const param = JSON.parse(config.body);
  const userId = param.userId;
  if(userId){
    return {
      code: 200,
      data: data.userInfo
    }
  }else{
    return {
      code: 501,
      data: null,
      msg: '请求参数不能为空'
    }
  }
});


