<template lang="pug">
  <article class='m-article'>
    <h2 class='m-article__title'>{{ article.title }}</h2>
    <time class='m-article__time'>{{ time }}</time>
    <div class='m-article__content' v-html='body'></div>
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
    },
    time() {
      const time = this.article.publishedAt
        ? this.article.publishedAt
        : this.article.createdAt
      return Util.formatDatetime(time, 'Y.M.D H:mm')
    },
    body() {
      return Util.nToBr(this.article.body)
    }
  },
  mounted() {
    Util.fetchItem('articles', this.id).then(data => {
      this.article = data
    })
  }
}
</script>
