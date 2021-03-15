import { AppContext } from '@vue/runtime-core'
import { Commit } from 'vuex'
import {userLogin} from '../store'
import {login} from "@/views/login/loginService"
import i18n from "@/i18n"
// i18n.global.
export  interface ILoginState {
    loginSuccess:boolean,
}
const state:ILoginState={
    loginSuccess: localStorage.getItem('login') ? true:false,//代表成功登陆
}

const mutations={
    // 登陆接口
    LOGIN_IN(state:ILoginState){
        state.loginSuccess = true
        localStorage.setItem("login","true") //设置登陆标记
    },
    // 登出接口
    LOGIN_OUT(state:ILoginState){
        state.loginSuccess = false
        localStorage.removeItem("login") //清除登陆标记
    }
}
const actions :any={
    loginIn(context:{commit:Commit},userInfo:userLogin){
        if(userInfo.username ==="admin" && userInfo.password ==="123"){
            return new Promise<boolean>((resolve,reject)=>{
                login<boolean>(userInfo).then(res=>{
                    if (res){
                        // 代表请求成功
                        context.commit("LOGIN_IN")
                        resolve(res.data)
                    }else{
                        // 代表请求失败
                        reject(false)
                    }
                })
            })
        }
    },
    loginOut(context:{commit:Commit}){
        context.commit("LOGIN_OUT")
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}


