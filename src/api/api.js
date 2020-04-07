// src/api/api.js
import axios from 'axios'

// 允许跨域携带cookie
axios.defaults.withCredentials = true;
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';


// export const uploadelf = () => {
//     return axios.request({
//         method: 'post',
//         url: 'http://xxxxx.xxx/api/uploadelf'
//     })
// }

export const start = () => {
    return axios.request({
        method: 'get',
        url: '/personalized?limit=14'
    })
}

export const songlist = () => {
    return axios.request({
        method: 'get',
        url: '/top/playlist'
    })
}

// export const playlist = () => {
//     return axios.request({
//         method: 'get',
//         url: 'http://www.zhuoran.fun:3000/playlist/detail'
//     })
// }


// export const getDisassemble = (funName = 'main') => {
//     return axios.request({
//         method: 'post',
//         url: 'http://xxxxx.xxx/api/disassemble',
//         data: {
//             funName
//         }
//     })
// }


