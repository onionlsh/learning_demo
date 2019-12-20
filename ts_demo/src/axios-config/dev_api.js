import Axios from "axios";
import { getCookie } from "../utils/cookie";
import router from "../router/router";
import { removeStore } from "../utils/storage";


let instance = Axios.create({
  baseURL: 'http://test.service.heygears.com:23456/api',
  timeout: 600000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});


// 请求拦截
instance.interceptors.request.use((config) => {
  if(getCookie('userCode')){
    
  }else{
    removeStore('menuData');
    router.push('/login');
  }
  return config;
},(error)=>{
  return Promise.reject(error);
});

// 响应拦截
instance.interceptors.response.use((response)=>{
  return response;
},(error)=>{
  return Promise.reject(error);
})

export default instance;