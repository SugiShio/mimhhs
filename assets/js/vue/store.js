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
    articles: []
  },
  mutations: {
    setArticles(state, payload) {
      state.articles = payload.articles
    }
  },
  getters: {
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
    }
  }
})
