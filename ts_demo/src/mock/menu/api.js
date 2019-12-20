import Mock from 'mockjs';
import data from './data.js';

const BASE_URL = 'http://test.service.heygears.com:23456';

Mock.setup({
  timeout: 300
});

/**
 * 获取菜单
 */
Mock.mock(BASE_URL+'/api/menu','post', (config) => {
  const param = JSON.parse(config.body);
  const {userId, orgId} = param;
  if(userId && orgId){
    const item = data.menuList.filter(menus => {
      if(menus.id == orgId){
        return true;
      }
    });
    return {
      code: 200,
      data: item[0] && item[0].menus || []
    }
  }else{
    return {
      code: 501,
      data: null,
      msg: '请求参数不能为空'
    }
  }
});