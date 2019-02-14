import * as Config from './config.js'
import moment from 'moment'
export default class Util {
  static formatDatetime(dt, format = Config.FORMAT_DATETIME) {
    const dateTime = moment(dt)
    return dateTime.format(format)
  }

  static fetchItems(contentType, queries) {
    const url = this.fetchUrl(Config.ENDPOINT_BASE + contentType, queries)
    return fetch(url)
      .then(data => {
        if (!data.ok) throw Error
        return data.json()
      })
      .then(data => {
        return data
        return Promise.resolve(data)
      })
  }

  static fetchItem(contentType, id, queries) {
    const url = this.fetchUrl(
      Config.ENDPOINT_BASE + contentType + '/' + id,
      queries
    )
    return fetch(url)
      .then(data => {
        if (!data.ok) throw Error
        return data.json()
      })
      .then(data => {
        return data
        return Promise.resolve(data)
      })
  }

  static fetchUrl(baseUrl = '', queries = {}) {
    if (!Object.keys(queries).length) return baseUrl
    const queriesArray = Object.keys(queries).map(v => v + '=' + queries[v])
    return baseUrl + '?' + queriesArray.join('&')
  }
}
