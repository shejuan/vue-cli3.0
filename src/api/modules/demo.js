import { get, post, postJson } from '../http'

export default {
    //监控-- 主页面数据展示
    monitorDataList(data) {
        return get('/hnhjsw/montior/MonitorDataList', data)
    }
}