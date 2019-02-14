const Vue = require('vue')
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from './pages/index.vue'

const routes = [{ path: '/', component: index }, { path: '*', redirect: '/' }]

export default new VueRouter({
  routes,
  mode: 'history',
  base: location.pathname,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
