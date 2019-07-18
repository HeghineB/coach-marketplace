import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/index/Index'


const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Index },
  // { path: '*', redirect: '/404' }
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
