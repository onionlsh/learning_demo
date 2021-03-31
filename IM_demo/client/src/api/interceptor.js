/**
 * axios 拦截器
 */
import axios from 'axios';
const baseURL = process.env.VUE_APP_AXIOS_URL;

const server = axios.create({
  baseURL: baseURL,
  timeout: 15000, // 15s
});

// 请求拦截
server.interceptors.request.user(config => {

});

// 响应请求：可统一处理后端返回的错误码
server.interceptors.response.use(config => {

})
