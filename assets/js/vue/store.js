// Polyfill
// require('babel-polyfill')
// require('promise-polyfill/src/polyfill')
// require('whatwg-fetch')

import Vuex from 'vuex'
const Vue = require('vue')
Vue.use(Vuex)
import * as Constants from './constants.js'

export default new Vuex.Store({
  state: {
    currentView: '',
    articles: []
  },
  mutations: {
    setCurrentView(state, payload) {
      state.currentView = payload.currentView
    },
    setArticles(state, payload) {
      state.articles = payload.articles
    }
  },
  getters: {
    getCurrentView: state => {
      return state.currentView
    },
    getArticles: state => {
      return state.articles
    }
  },
  actions: {
    init({ commit, dispatch }) {
      fetch(Constants.ENDPOINT_ARTICLE)
        .then(data => {
          if (!data.ok) throw Error
          return data.json()
        })
        .then(data => {
          commit('setArticles', { articles: data })
        })
    },
    updateCurrentView({ commit }, payload) {
      commit('setCurrentView', payload)
    }
  }
})
