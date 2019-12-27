import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/login/index.vue'

Vue.use(Router)

const routesMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard'
  },{
    path: '/login',
    component: Login
  },{
    path: '/dashboard',
    component: Layout,
  }
]

export default new Router({
  routes: routesMap
})
