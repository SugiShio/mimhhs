<template lang="pug">
<div class="m-container" :class="className">
  <div class="m-container__header">
    <header class="m-header" :class="className">
      <h1 class="m-header__title" :class="className">
        <router-link to='/'>
          <img src="../../images/logo_white.svg" alt="mimhhs" scale="0">
        </router-link>
      </h1>
    </header>
  </div>

  <div class="m-container__body">
    <main class="m-main">
      <router-view></router-view>
    </main>
    <footer class="m-footer">
      ©2018, mimmhhs
    </footer>
  </div>
</div>
</template>

<script>
import * as Config from './config.js'
export default {
  computed: {
    currentView() {
      return this.$store.getters.getCurrentView
    },
    className() {
      let className = []
      if (!Config.LAYOUT_STYLE[this.currentView]) {
        className.push('vartical')
      } else {
        Object.keys(Config.LAYOUT_STYLE[this.currentView]).forEach(key => {
          className.push(key)
        })
      }
      return className.join(' ')
    }
  },
  created() {
    this.updateCurrentView()
  },
  watch: {
    $route() {
      this.updateCurrentView()
    }
  },
  methods: {
    updateCurrentView() {
      this.$store.dispatch('updateCurrentView', {
        currentView: this.$router.currentRoute.name
      })
    }
  }
}
</script>
