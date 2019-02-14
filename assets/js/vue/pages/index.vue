<template lang="pug">
  <div>
    <h2 class='m-main__title'>Articles</h2>
    <article-list :items='articles'></article-list>
    <router-link v-if='hasMore' to='/articles/' class='m-main__link' >more</router-link>
  </div>
</template>
<script>
import Util from '../util.js'
import articleList from '../modules/articleList.vue'
const LIMIT = 5
export default {
  data() {
    return {
      articles: [],
      count: 0
    }
  },
  components: {
    articleList: articleList
  },
  computed: {
    hasMore() {
      return this.count > LIMIT
    }
  },
  mounted() {
    Util.fetchItems('articles', { limit: LIMIT }).then(data => {
      this.articles = data.articles
      this.count = data.count
    })
  }
}
</script>
