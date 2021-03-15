import router from "./src/router/index"
import store from "@/store/index"
import { RouteRecordRaw } from "vue-router"
const whiteList =["/","/about","login"]
router.beforeEach(async (to,form,next)=>{
    let loginSuccess = store.state.login.loginSuccess
    if (loginSuccess && to.path !="/login") {
        // 代表登陆,并且不是登录界面,继续下次操作
        // 首先需要判断当前全县是否是白名单,如果是白名单,那么直接下一步
        // 如果不是白名单,首先需要判断动态路由是否添加了，如果已经添加，那么直接下一步
        // 如果没有，先添加动态路由
        let systemRouter = store.state.router.systemRouter
        if (systemRouter.length ===0){
            // 如果没有动态路由，先添加动态路由
           const systemRouter = await store.dispatch("router/dynamicRouter")
           systemRouter.forEach((route: RouteRecordRaw) => {
                router.addRoute(route)  
           });
           next({...to,replace:true})
        }else{
            // 代表已经添加动态路由，直接跳转
            next() 
        }
        
    }else if (loginSuccess && to.path =="/login"){
        // 代表登陆了,并且是登陆,直接跳转到首页
        next({path:"/"})
    }else if (!loginSuccess && to.path !="/login"){
        //没有登录,并且不是登录界面,跳转到登陆界面
        next(`/login?redirect=${to.path}`)
    }else if (!loginSuccess && to.path =="/login"){
        //没有登录,并且是登录界面,正常跳转
        next()
    }else if(!loginSuccess && whiteList.includes(to.path)){
        // 没有登录，但是是白名单
        next()
    }  
})