const Vue = require('vue');
import Root from './components/root.vue'
$(function() {
  const Component = Vue.extend(Root)
  new Component().$mount('#app')
})


