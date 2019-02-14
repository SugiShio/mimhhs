const Vue = require('vue')
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import store from './store.js'
import router from './router.js'

$(function() {
  const app = new Vue({
    el: '#app',
    store,
    router,
    created() {
      store.dispatch('init')
    }
  })
})
