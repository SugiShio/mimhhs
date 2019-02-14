<template lang="pug">
  <router-link :to='url' class='m-articleList__link'>
    <time class="m-articleList__date">{{ createdAt }}</time>
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
    createdAt() {
      return Util.formatDatetime(this.item.createdAt)
    },
    url() {
      return '/articles/' + this.item._id
    }
  }
}
</script>
