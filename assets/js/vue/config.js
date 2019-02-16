const { env } = require('process');
export const ENDPOINT_BASE = '/api/'
// export const ENDPOINT_BASE = env.NODE_ENV ? '/api/' : 'http://localhost:3000/api/'
export const LAYOUT_STYLE = {
  index: {
    horizon: true
  }
}
export const MENU_ITEMS = [
  {
    name: 'Top',
    routeName: 'index'
  },
  {
    name: 'Articles',
    routeName: 'articles'
  }
]
export const FORMAT_DATETIME = 'Y.M.D H:mm:ss'
