import router from "./src/router/index"
import store from "@/store/index"
import { userLogin} from "@/store/store"
router.beforeEach((to,form,next)=>{
    let loginSuccess = store.state.login.loginSuccess
    if (loginSuccess && to.path !="/login") {
        // 代表登陆,并且不是登录界面,继续下次操作
        next() 
    }else if (loginSuccess && to.path =="/login"){
        // 代表登陆了,并且是登陆,直接跳转到首页
        next({path:"/"})
    }else if (!loginSuccess && to.path !="/login"){
        //没有登录,并且不是登录界面,跳转到登陆界面
        next({path:"/login"})
    }else if (!loginSuccess && to.path =="/login"){
        //没有登录,并且是登录界面,正常跳转
        next()
    }  
})