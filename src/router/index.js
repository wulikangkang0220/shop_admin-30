import Vue from 'vue'
// 创建路由对象
// 导入vueRouter这个包
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
// VueRouter是一个vue的插件，如果再模块化编程中，必须调用Vue.use

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
export default router
