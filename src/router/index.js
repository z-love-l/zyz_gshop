/* 路由器对象模块 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
// import User from '../pages/User/User'
import Login from '../pages/Login/Login'
// 声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/order',
      component: Order
    },
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
