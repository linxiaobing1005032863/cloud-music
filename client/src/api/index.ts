// 创建请求对象，在此对请求进行拦截和处理
import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})
// 模拟网易云音乐接口请求
service.interceptors.request.use(option => {
    return option
}, error => Promise.reject(error))

service.interceptors.response.use(response => {
    return response
}, error => Promise.reject(error))

export default service