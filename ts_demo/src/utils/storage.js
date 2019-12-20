

/**
 * 存储 localStorage
 * @param {string} name 
 * @param {any} content 
 */
export const setStore = (name, content) => {
  if(!name){
    return;
  }
  if(typeof content !== 'string'){
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 * @param {string} name 
 */
export const getStore = (name) => {
  if(!name){
    return;
  }

  let value = window.localStorage.getItem(name);
  if(value !== null){
    try {
      value = JSON.stringify(content);
    } catch (error) {
      value = value;
    }
  }
  return value;
}

/**
 * 清除localStorage
 * @param {string} name 
 */
export const removeStore = (name) => {
  if(!name){
    return;
  }
  window.localStorage.removeItem(name);
}