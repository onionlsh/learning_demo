/**
 * 格式化作用的过滤器
 */

/**
 * 格式化 时间戳
 * 如果是当天，显示时间，否则显示日期
 * @param {Number} timestamp 时间戳
 * @returns YYYY-MM-DD HH:mm
 */
export function utcLocalTime(timestamp) {
  if(typeof timestamp !== 'number'){
    return timestamp;
  }
  
  if (!timestamp) {
    timestamp = Date.parse(new Date());
  }
  const time = new Date(timestamp); // 时间戳转成本地时间对象
  const year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let seconds = time.getSeconds();
  month = String(month).padStart(2,0);
  day = String(day).padStart(2,0);
  hour = String(hour).padStart(2,0);
  minute = String(minute).padStart(2,0);
  seconds = String(seconds).padStart(2,0);

  const now = new Date();
  if(time.getDate() === now.getDate()) {
    return `${hour}:${minute}:${seconds}`;
  }else if(year === now.getFullYear()) {
    return `${month}-${day} ${hour}:${minute}:${seconds}`;
  }else {
    return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`;
  }
  
}