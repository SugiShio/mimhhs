module.exports = function(req, res) {
  const Article = require('keystone').list('Article')
  const offset = req.query.offset ? parseInt(req.query.offset) : 0
  const limit = req.query.limit ? parseInt(req.query.limit) : 10
  Article.model.count({}, (error, count) => {
    if (error) {
      res.json(error)
    } else {
      Article.model
        .find({}, 'id title createdAt publishedAt')
        .sort({ createdAt: 'desc' })
        .skip(offset)
        .limit(limit)
        .exec((error, data) => {
          if (error) {
            res.json(error)
          } else {
            res.json({
              count: count,
              articles: data
            })
          }
        })
    }
  })
}
