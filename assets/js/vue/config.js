export const ENDPOINT_BASE =
  process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:3000/api/'
export const LAYOUT_STYLE = {
  index: {
    top: true
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
  },
  {
    name: 'Profile',
    routeName: 'profile'
  }
]
export const FORMAT_DATETIME = 'Y.M.D H:mm:ss'
