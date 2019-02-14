const Vue = require('vue')
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from './pages/index.vue'
import articleIndex from './pages/articles/index.vue'
import articleShow from './pages/articles/show.vue'

const routes = [
  { name: 'index', path: '/', component: index },
  { name: 'articles', path: '/articles', component: articleIndex },
  { name: 'articles/show', path: '/articles/:id', component: articleShow },
  { path: '*', redirect: '/' }
]

export default new VueRouter({
  routes,
  mode: 'history',
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
