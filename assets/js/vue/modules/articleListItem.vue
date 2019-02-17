<template lang="pug">
  <router-link :to='url' class='m-articleList__link'>
    <time class="m-articleList__date">{{ publishedAt }}</time>
    <div class='m-articleList__title'>{{ item.title }}</div>
  </router-link>
</template>

<script>
import Util from '../util.js'
export default {
  props: {
    item: Object
  },
  computed: {
    publishedAt() {
      return Util.formatDatetime(this.item.publishedAt, 'Y.M.D')
    },
    url() {
      return '/articles/' + this.item._id
    }
  }
}
</script>
