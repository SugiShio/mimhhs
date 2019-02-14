const Vue = require('vue')
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import store from './store.js'
import router from './router.js'
import container from './container.vue'

$(function() {
  const app = new Vue({
    el: '#app',
    components: {
      container: container
    },
    store,
    router,
    created() {
      store.dispatch('init')
    }
  })
})
