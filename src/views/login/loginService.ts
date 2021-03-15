// 登录界面与服务器请求相关
export interface ILogin{
    username:string,
    password:string
}
import request from "@/util/request"
// 处理登录请求
export  function login<T>(userInfo:ILogin){
      return  request.postServiceData<T>("user/login",userInfo)
} 