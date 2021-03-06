var keystone = require('keystone')
var importRoutes = keystone.importer(__dirname)

var routes = {
  views: importRoutes('./views'),
  api: importRoutes('./api')
}

exports = module.exports = function(app) {
  app.use(keystone.express.static('public'))
  app.get('/', routes.views.index)
  app.get('/articles', routes.views.index)
  app.get('/articles/:id', routes.views.index)
  app.get('/profile', routes.views.index)

  // api
  app.get('/api/users', keystone.middleware.cors, routes.api.user.get)
  app.get('/api/articles', keystone.middleware.cors, routes.api.article.index)
  app.get(
    '/api/articles/:id',
    keystone.middleware.cors,
    routes.api.article.show
  )
  app.get('/api/profile', keystone.middleware.cors, routes.api.profile.show)
}
