import Cookies from 'js-cookie';

/**
 * 需要注意：
 *  cookie保存的是格林威治时间（标准时间），浏览器显示的也是格林威治时间
 *  例如：
 *       设置过期时间为 2个小时候，当前东八区时间为 2019-12-12 15：00：00
 *       理想中，看到的cookie expires：2019-12-12 17：00：00
 *       但实际上，时间为 2019-12-12 9：00：00。y
 *       cookie以格林威治时间为准
 * @param {string} name 
 * @param {any} value 
 * @param {number} minute 
 */
/* export const setCookie = (name, value, minute = 0) => {
  const date = new Date();
  const expires = new Date(date.getTime() + minute * 60 * 1000 );
  
  Cookies.set(name,value, {expires});
} */

/**
 * 获取cookie：中文会编码后存放到cookie
 * @param {string} name 
 */
/* export const getCookie = (name) =>{
  let value = name && Cookies.get(name);
  if(value){
    return unescape(value)
  }
  return value;
} */

/**
 * 清除指定cookie
 * @param {string} name 
 * @param {object} param 
 */
/* export const clear = (name, param) => {
  if(param){
    Cookies.remove(name, param);
  }else{
    Cookies.remove(name);
  }
}
 */