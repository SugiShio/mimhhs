<template lang="pug">
  <ul>
    <li v-for='article in articles'>
      {{ article.title }}
    </li>
  </ul>
</template>
<script>
import * as Constants from '../constants.js'
export default {
  computed: {
    articles() {
      return this.$store.getters.getArticles
    }
  }
}
</script>

<style lang="scss" scoped></style>
