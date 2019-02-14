module.exports = function(req, res) {
  const Article = require('keystone').list('Article')
  const offset = req.query.offset ? parseInt(req.query.offset) : 0
  const limit = req.query.limit ? parseInt(req.query.limit) : 10
  Article.model
    .find({}, 'id title createdAt')
    .sort({ createdAt: 'desc' })
    .skip(offset)
    .limit(limit)
    .exec((error, data) => {
      if (error) {
        res.json(error)
      } else {
        res.json(data)
      }
    })
}
