module.exports = function(req, res) {
  const Article = require('keystone').list('Article')
  const Category = require('keystone').list('Category')

  Article.model.findById(req.params.id).exec((error, data) => {
    if (error) {
      res.json(error)
    } else {
      let category = {}
      Category.model
        .findById(data.category)
        .exec((error, data) => {
          category.id = data._id
          category.name = data.name
        })
        .then(() => {
          const response = {
            id: data._id,
            updatedAt: data.updatedAt,
            createdAt: data.createdAt,
            publishedAt: data.publishedAt,
            category: category,
            title: data.title,
            published: data.published,
            tag: data.tag,
            body: data.body.html
          }
          res.json(response)
        })
    }
  })
}
