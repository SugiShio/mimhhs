<template lang="pug">
  <article>
    <h2>{{ article.title }}</h2>
    <div v-html='article.body'></div>
  </article>
</template>
<script>
import Util from '../../util.js'
export default {
  data() {
    return {
      article: {}
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    Util.fetchItem('articles', this.id).then(data => {
      this.article = data
    })
  }
}
</script>

<style lang="scss" scoped></style>
