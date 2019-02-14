<template lang="pug">
  <nav class='m-menu' :class='className'>
    <ul class='m-menu__list' :class='className'>
      <li v-for='item in items' class='m-menu__item' :class='className'>
        <span v-if='currentItem(item)'>{{ item.name }}</span>
        <router-link v-else :to='{name: item.routeName}'>{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import * as Config from '../config.js'
export default {
  computed: {
    items() {
      return Config.MENU_ITEMS
    },
    currentView() {
      return this.$store.getters.getCurrentView
    },
    className() {
      let className = []
      if (!Config.LAYOUT_STYLE[this.currentView]) {
        className.push('vertical')
      } else {
        Object.keys(Config.LAYOUT_STYLE[this.currentView]).forEach(key => {
          className.push(key)
        })
      }
      return className.join(' ')
    }
  },
  methods: {
    currentItem(item) {
      return item.routeName === this.currentView
    }
  }
}
</script>
