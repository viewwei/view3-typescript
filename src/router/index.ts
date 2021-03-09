import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
const Test1 = () =>import("@/components/test/test1.vue")
const Login =() =>import("@/views/login/index.vue")
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:"/login",
    name:"Login",
    component:Login
  }

]
// asyncRoutes里面存储的路由是需要动态加载的
const asyncRoutes:Array<RouteRecordRaw> =[
  {
    path:'/test1',
    name:"test",
    component:Test1
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export {routes,asyncRoutes}
export default router
