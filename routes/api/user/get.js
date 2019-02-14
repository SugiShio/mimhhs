module.exports = function(req, res) {
  const User = require('keystone').list('User')
  User.model.find(req.query, (error, data) => {
    if (error) {
      next(error)
    } else {
      res.json(data)
    }
  })
}
