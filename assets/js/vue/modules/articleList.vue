<template lang="pug">
  <ul class='m-articleList'>
    <li v-for='item in items' class='m-articleList__item'>
      <article-list-item :item='item'></article-list-item>
    </li>
  </ul>
</template>
<script>
import articleListItem from './articleListItem.vue'
export default {
  components: {
    articleListItem: articleListItem
  },
  props: {
    items: Array
  }
}
</script>
