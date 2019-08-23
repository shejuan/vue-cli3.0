import axios from 'axios'
import { errorHandle } from './errorHandle'

// build http header
function buildHeader(option) {
    // let token = storage.get('token') ? storage.get('token') : null
    // if (!token) return {}
    // let headers = {
    //     Authorization: token
    // }

    // if (option) {
    //     headers = { ...headers, ...option }
    // }
    // return headers
}

function handleError(err = {}) {
    let errorCode = err.code
    // 如果是手动取消的请求，不显示错误信息
    if (axios.isCancel(errorCode)) {
        console.log(errorCode)
    } else {
        // 错误处理
        errorHandle(errorCode)
        let msg = err.msg || '发生未知错误，请重试'
        if (('' + errorCode).indexOf('timeout') > -1) {
            msg = '加载超时！请检查你的网络'
        }
    }
}

function handleCode(code = {}, msg = {}) {
    if (!code || !msg) return
    switch (code) {
        case 2000:

            break
        case 2100:

            break
        case 2200:

            break
        case 2300:

            break
        case 3000:

            break
        case 3100:

            break
        case 3200:

            break
        case 3300:

            break
        default:
            break
    }
}

function transformResponse(data) {
    if (data) {
        if ((!data.success || data.success || data.size) && data.code !== '-10000') { // 导出的blob类型 是没有success类型的
            handleCode(data.code, data.msg)
            return data
        } else {
            handleError(data)
            let msg = data.message || '发生未知错误，请重试'
            throw new Error(msg)
        }
    } else {
        let msg = 'Unknow Error'
        throw new Error(msg)
    }
}

// axios配置
let axiosConfig = (option = {}) => {
    return {
        // baseURL: host,
        headers: buildHeader(option),
        timeout: 60000,
        responseType: 'json',
        // responseType: 'blob',
        transformRequest: [function (data) {
            if (data instanceof FormData) {
                return data
            } else {
                let contType = option['Content-Type']
                if (contType && contType.indexOf('application/json') > -1) {
                    return JSON.stringify(data)
                } else {
                    // return stringify(data)
                    return data
                }
            }
        }],
        transformResponse: [function (data) {
            return transformResponse(data)
        }]
    }
}

// http get method
export function get(url, data) {
    let nax = axios.create(axiosConfig())
    return nax.get(url, {
        params: data
    }).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

// http post method
export function post(url, data) {
    let nax = axios.create(axiosConfig({
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }))
    return nax.post(url, data).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

// http postJson  method
export function postJson(url, data) {
    let nax = axios.create(axiosConfig({
        'Content-Type': 'application/json;charset=utf-8'
    }))
    return nax.post(url, data).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

// http post method    ------   multipart/form-data 
export function postForm(url, data) {
    let nax = axios.create(axiosConfig())
    return nax.post(url, data).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

// http delete method
export function del(url, data) {
    let nax = axios.create(axiosConfig())
    return nax.delete(url, { params: data }).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}