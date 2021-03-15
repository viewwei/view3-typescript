import axios, { AxiosRequestConfig } from "axios"
 let pending:any[] = []
 const cancelToken = axios.CancelToken
 const removePending = (config:any,f?:any)=>{
    const flagUrl = config.url;
    // 判断该请求是否在请求队列中
    if (pending.indexOf(flagUrl) !== -1) {
        // 如果在请求中，并存在f,f即axios提供的取消函数
        if (f) {
            f('取消重复请求'); // 执行取消操作
        } else {
            pending.splice(pending.indexOf(flagUrl), 1); // 把这条记录从数组中移除
        }
    } else {
        // 如果不存在在请求队列中，加入队列
        if (f) {
            pending.push(flagUrl);
        }
    }
 }
 const service = axios.create({
     timeout:5000,
     baseURL:"/api/"
 })
 service.interceptors.request.use((config:any)=>{
    // neverCancel 配置项，允许多个请求
    if (!config.neverCancel){
        config.cancelToken = new cancelToken((c: any) => {
            removePending(config, c);
        })
    }
    return config
 },error=>{
    return Promise.reject(error)
 })
service.interceptors.response.use(response=>{
    removePending(response.config)
    const {data,status} = response
    if (status === 200){
        return data
    }else{
       return Promise.reject("error") 
    }
},err=>{
    pending = []
    return Promise.reject(err)
})
export default service