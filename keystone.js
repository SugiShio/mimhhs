var keystone = require('keystone')

keystone.init({
  'cookie secret': 'secure string goes here',
  name: 'mimhhs',
  'user model': 'User',
  'auto update': true,
  auth: true,
  views: 'templates/views',
  'view engine': 'pug'
})
keystone.set('routes', require('./routes'))

if(process.env.NODE_ENV !== 'production') {
  keystone.set('cors allow origin', true)
  keystone.set('cors allow methods', true)
  keystone.set('cors allow headers', true)
}
keystone.import('models')
keystone.start()
