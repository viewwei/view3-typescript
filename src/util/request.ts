import service from "./axios"
import { IUrlParams, IResponseData } from "./iRequest"
class Request {
    //get请求数据
    getServiceData<T=any>(url:string){
       return service.get<T,IResponseData<T>>(encodeURI(url))
    }
    // post请求数据
    postServiceData<T=any>(url:string,params:IUrlParams,requestConfig?:IUrlParams){
        return service.post<T,IResponseData<T>>(encodeURI(url),params,requestConfig)
    }
     // post请求数据
     deleteServiceData<T=any>(url:string,params:IUrlParams, ){
        return service.delete<T,IResponseData<T>>(encodeURI(url),params,)
    }
    // post请求数据
    putServiceData<T=any>(url:string,params:IUrlParams, requestConfig?:IUrlParams){
        return service.put<T,IResponseData<T>>(encodeURI(url),params,requestConfig)
    }
}
export default new Request()