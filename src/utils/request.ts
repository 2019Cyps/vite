import axios from 'axios';
import { useRouter } from 'vue-router'
const router = useRouter()
//1. 创建axios对象
const service = axios.create();

//2. 请求拦截器
service.interceptors.request.use(config => {
    //config.headers['Accept'] = '*/*'
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    config.url = import.meta.env.VITE_APP_BASE_URL + config.url // 动态url
	return config;
}, error => {
Promise.reject(error);
});

//3. 响应拦截器
service.interceptors.response.use(response => {
    //判断code码
    return response.data;

}, error => {
    if (error.response.data.code == 'A0230') {   
        localStorage.removeItem('token')
    }
    return Promise.reject(error);
});


export default service;