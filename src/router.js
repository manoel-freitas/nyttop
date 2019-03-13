import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './views'

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active',
  mode: 'history'
})

Vue.use(VueRouter)

export default router
