let baseUrl = "";   //这里是一个默认的url，可以没有
// switch (process.env.NODE_ENV) {
//     case 'development':
//         baseUrl = "http://localhost:57156/"  //这里是本地的请求url
//         break
//     case 'test':   // 注意这里的名字要和步骤二中设置的环境名字对应起来
//         baseUrl = "http://www.cnblogs.com/XHappyness/"  //这里是测试环境中的url
//         break
//     case 'production':
//         baseUrl = "https://www.cnblogs.com/XHappyness/p/7686267.html"   //生产环境url
//         break
// }

if (process.env.NODE_ENV === 'development') {
    baseUrl = "http://localhost:57156"  //这里是本地的请求url
} else if (process.env.VUE_GX_WX === 'production') {
    baseUrl = "http://api.111.com"
} else if (process.env.VUE_GX_WX === 'test') {
    baseUrl = "http://test.111.com"
}
export default baseUrl;