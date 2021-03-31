import Vue from 'vue'
import VueRouter from 'vue-router'
import webIm from '../views/web-im.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: webIm
  },
]

const router = new VueRouter({
  routes
})

export default router
