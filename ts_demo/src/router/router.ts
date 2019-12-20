import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/components/Layout/index.vue"
import Login from '@/views/login/index.vue'

Vue.use(Router)

const routesMap = [
  {
    path: '/',
    component: Login
  }
];

export default new Router({
  routes: routesMap
})