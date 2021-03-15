import { RouteRecordRaw } from "vue-router"
import { Commit } from "vuex"
import {asyncRoutes,routes} from "@/router/index"
export interface ISRouter {
    systemRouter:RouteRecordRaw[]
}

const state:ISRouter={
    systemRouter:[]
}
interface IRouterMutations{
    dynamicRouterMutation:(state:ISRouter,systemRouter:RouteRecordRaw[])=>void
}
const mutations:IRouterMutations={
    dynamicRouterMutation(state,systemRouter){
        state.systemRouter=systemRouter 
    }
}
export interface IRouterAction {
    dynamicRouter:(context:{commit:Commit})=>void
}
const actions:IRouterAction={
    dynamicRouter(context){
        return new Promise<RouteRecordRaw[]>(resolve=>{
           let systemRouters = routes.concat(asyncRoutes) 
           context.commit("dynamicRouterMutation",systemRouters)
           resolve(asyncRoutes)
        })
       
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}