<template lang="pug">
  <div>
    <h2>Articles</h2>
    <article-list :items='articles'></article-list>
  </div>
</template>
<script>
import Util from '../../util.js'
import articleList from '../../modules/articleList.vue'
export default {
  data() {
    return {
      articles: []
    }
  },
  components: {
    articleList: articleList
  },
  mounted() {
    Util.fetchItems('articles').then(data => {
      this.articles = data
    })
  }
}
</script>
