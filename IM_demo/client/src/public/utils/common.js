
/**
 * 字符串转JSON
 * @param {string} str 
 */
export const parseJson = (str) => {
  let result = str;
  if(typeof str === 'string') {
    try {
      result = JSON.parse(str);
    } catch (error) {
      console.log('parseJson error: str不是完整的JSON格式');
    }
  }
  return result
}

/**
 * 深拷贝对象
 *  attention：对象中如果存在Date或Regex的值，会被转成字符串的格式
 * @param {Object} object 
 */
export const copyObject = (object) => {
  let result;
  if(object instanceof Object) {
    const str = JSON.stringify(object);
    result = parseJson(str);
  }
  return result;
}