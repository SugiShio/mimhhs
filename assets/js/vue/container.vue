<template lang="pug">
<div class="m-container" :class="className">
  <div class="m-container__header">
    <header class="m-header" :class="className">
      <div class="m-header__trigger" :class='className' @click='toggleHeader'><span></span><span></span><span></span></div>
      <h1 class="m-header__title" :class="className">
        <router-link to='/'>
          <img src="../../images/logo_white.svg" alt="mimhhs" scale="0">
        </router-link>
      </h1>
      <m-menu></m-menu>
    </header>
  </div>

  <div class="m-container__body" :class="className">
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
import menu from './modules/menu.vue'
import * as Config from './config.js'
export default {
  components: {
    mMenu: menu
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
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
      if (this.isOpen) className.push('open')
      return className.join(' ')
    }
  },
  created() {
    this.updateCurrentView()
  },
  watch: {
    $route() {
      this.updateCurrentView()
      this.isOpen = false
    }
  },
  methods: {
    updateCurrentView() {
      this.$store.dispatch('updateCurrentView', {
        currentView: this.$router.currentRoute.name
      })
    },
    toggleHeader() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
