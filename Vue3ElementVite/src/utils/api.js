import request from './request'
export function getBanner(params){
    return request({
        url:'/prod-api/api/v1/auth/captcha', // 这里填写你自己的api地址
        method: 'get', // get方法可以省略不写
        params
    })
}