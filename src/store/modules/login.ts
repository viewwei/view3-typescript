import { AppContext } from '@vue/runtime-core'
import { Commit } from 'vuex'
import {userLogin} from '../store'
export  interface ILoginState {
    loginSuccess:boolean 
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
            context.commit("LOGIN_IN")
        }
       
    },
    loginOut(context:{commit:Commit}){
        debugger
        context.commit("LOGIN_OUT")
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}


