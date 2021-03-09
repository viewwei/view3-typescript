import { RouteRecordRaw } from "vue-router"

export interface ISRouter {
    systemRouter:RouteRecordRaw[]
}

const state:ISRouter={
    systemRouter:[]
}
const mutations={}
const actions={}
export default {
    state,
    mutations,
    actions
}