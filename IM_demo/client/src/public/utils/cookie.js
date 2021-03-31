/**
 * cookies相关方法
 */
import Cookies from 'js-cookie';
import * as common from './common';

/**
 * 存储Cookie
 * @param {string} name 
 * @param {any} content 
 * @param {number} minutes 
 */
export const setCookie = (name, content, minutes) => {
  if(!name) return;

  if(typeof content !== 'string') {
    content = JSON.stringify(content);
  }

  const date = new Date();
  const expires = new Date(date.getTime() + minutes * 60 * 1000);
  Cookies.set(name, content, { expires: expires });
}

/**
 * 获取Cookie
 * @param {string} name 
 */
export const getCookie = (name) => {
  if(!name) return;
  let content = Cookies.get(name);
  content = common.parseJson(content);
  return content;
}

/**
 * 删除Cookie
 * @param {string} name 
 */
export const removeCookie = (name) => {
  if(!name) return;
  Cookies.remove(name);
}
