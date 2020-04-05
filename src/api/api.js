// src/api/api.js
import axios from 'axios'

// 允许跨域携带cookie
// axios.defaults.withCredentials = true;

export const uploadelf = () => {
    return axios.request({
        method: 'post',
        url: 'http://xxxxx.xxx/api/uploadelf'
    })
}

export const start = () => {
    return axios.request({
        method: 'get',
        url: 'http://www.zhuoran.fun:3000/personalized'
    })
}

export const songlist = () => {
    return axios.request({
        method: 'get',
        url: '//www.zhuoran.fun:3000/top/playlist?limit=9'
    })
}


export const getDisassemble = (funName = 'main') => {
    return axios.request({
        method: 'post',
        url: 'http://xxxxx.xxx/api/disassemble',
        data: {
            funName
        }
    })
}


