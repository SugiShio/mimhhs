<template lang="pug">
  <div>
    <h2 class='m-main__title'>Articles</h2>
    <article-list :items='articles'></article-list>
    <span @click='fetchItems' v-if='hasMore' class='m-main__link'>more</span>
  </div>
</template>
<script>
import Util from '../../util.js'
import articleList from '../../modules/articleList.vue'
const CONTENT_TYPE = 'articles'
export default {
  data() {
    return {
      articles: [],
      count: 0
    }
  },
  computed: {
    hasMore() {
      return this.articles.length < this.count
    }
  },
  components: {
    articleList: articleList
  },
  mounted() {
    Util.fetchItems(CONTENT_TYPE).then(data => {
      this.count = data.count
      this.articles = data.articles
    })
  },
  methods: {
    fetchItems() {
      const offset = this.articles.length
      Util.fetchItems(CONTENT_TYPE, { offset: offset }).then(data => {
        this.articles = this.articles.concat(data.articles)
      })
    }
  }
}
</script>
