import axios from 'axios';
//1. 创建axios对象
const service = axios.create();

//2. 请求拦截器
service.interceptors.request.use(config => {
    //config.headers['Accept'] = '*/*'
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.url = import.meta.env.VITE_APP_BASE_URL + config.url // 动态url
	return config;
}, error => {
Promise.reject(error);
});

//3. 响应拦截器
service.interceptors.response.use(response => {
//判断code码
return response.data;
},error => {
return Promise.reject(error);
});
export default service;