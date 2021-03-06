// src/api/api.js
import axios from 'axios'

// 允许跨域携带cookie
axios.defaults.withCredentials = true;
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const start = () => {
    return axios.request({
        method: 'get',
        url: 'http://www.zhuoran.fun:3000/personalized'
    })
}

export const songlist = () => {
    return axios.request({
        method: 'get',
        url: 'http://www.zhuoran.fun:3000/top/playlist'
    })
}


// export const getDisassemble = (funName = 'main') => {
//     return axios.request({
//         method: 'post',
//         url: 'http://xxxxx.xxx/api/disassemble',
//         data: {
//             funName
//         }
//     })
// }