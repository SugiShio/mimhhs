// Polyfill
// require('babel-polyfill')
// require('promise-polyfill/src/polyfill')
// require('whatwg-fetch')

import Vuex from 'vuex'
const Vue = require('vue')
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentView: ''
  },
  mutations: {
    setCurrentView(state, payload) {
      state.currentView = payload.currentView
    }
  },
  getters: {
    getCurrentView: state => {
      return state.currentView
    }
  },
  actions: {
    init({ commit, dispatch }) {},
    updateCurrentView({ commit }, payload) {
      commit('setCurrentView', payload)
    }
  }
})
