import Vue from 'vue'
// 引用API文件
import api from '../api/index'
// 将API方法绑定到全局
// Vue.prototype.$api = api
export default class Base extends Vue {
    api = api
}