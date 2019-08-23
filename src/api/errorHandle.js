// import store from '@/store/index'

// // 重新登录
// export function reLogin() {
//     store.dispatch('user/logout')
// }

/**
    错误代码处理
*/
export function errorHandle(err) {
    if (!err) return
    console.log(err)
    switch (err) {
        // token 过期
        case '-10000':
            // reLogin()
            break
        default:
            break
    }
}
