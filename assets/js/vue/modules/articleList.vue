<template lang="pug">
  <transition-group name='float' :css='false' @enter='enter' tag='ul' class='m-articleList'>
    <li v-for='(item, index) in items' :key='item._id' :data-index='index' class='m-articleList__item'>
      <article-list-item :item='item'></article-list-item>
    </li>
  </transition-group>
</template>
<script>
let $ = require('jquery')
import articleListItem from './articleListItem.vue'
export default {
  components: {
    articleListItem: articleListItem
  },
  props: {
    items: Array
  },
  methods: {
    enter: function(el, done) {
      var delay = (el.dataset.index - this.oldLength) * 150
      setTimeout(function() {
        $(el).addClass('show')
      }, delay)
    }
  },
  watch: {
    items(newVal, oldVal) {
      this.oldLength = oldVal
    }
  }
}
</script>
