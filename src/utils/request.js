import axios from 'axios'
import qs from 'qs'
import store from '@/store'
import { Message } from 'element-ui'
import cache from '@/utils/cache'

// 创建axios实例
export const instance = axios.create({
    baseURL: process.env.BASE_API,      // api的base_url
    timeout: 5 * 1000                   // 请求超时时间
})
// request拦截器
instance.interceptors.request.use(config => {
    // Do something before request is sent
    if (store.getters.token) {
        config.headers['auth_token'] = cache.getToken() // 让每个请求携带token -- ['AUTH_TOKEN']为自定义key
    }
    config.headers = {   // 初始化默认post header
        'Content-Type':'application/x-www-form-urlencoded'
    }
    // default 自定义请求头 token 时间戳 随机字符串
    const configHeaders = { 
        'auth_token': cache.getToken(),                    
        'timestamp': Date.parse(new Date())/1000,    
        'nonce': Math.random().toString(36).substr(2)  
    }
    Object.assign(config.headers, configHeaders);
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
instance.interceptors.response.use(response => {
    const res = response.data
    if (res && res.error) {
        return Promise.reject(res.error)
    }
    return response
}, error => {
    Message({
        message: error.message, // '服务器繁忙，请稍后重试'
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
})


export const request = async(url = '', type = 'GET', data = {}) => {
    let result
    type = type.toUpperCase()
    if (type === 'GET') {
        await instance.get(url, { params: data })
        .then(res => {
            result = res.data
        })
    } else if (type === 'POST') {
        await instance.post(url, qs.stringify(data))
        .then(res => {
            result = res.data
        })
    }
    return result
}
