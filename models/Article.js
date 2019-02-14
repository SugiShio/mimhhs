const keystone = require('keystone')
const Types = keystone.Field.Types

const Article = new keystone.List('Article')

Article.add({
  title: { type: String, required: true, initial: true, index: true },
  body: { type: Types.Markdown, required: true, initial: true },
  category: { type: Types.Relationship, initial: true, ref: 'Category' },
  tag: { type: Types.TextArray },
  createdAt: { type: Types.Datetime, hidden: true },
  updatedAt: { type: Types.Datetime, hidden: true },
  published: { type: Boolean, default: true, initial: true },
  publishedAt: {
    type: Types.Datetime,
    initial: true
  }
})

Article.schema.virtual('canAccessKeystone').get(function() {
  return true
})

Article.schema.pre('save', function(next) {
  this.createdAt = this.createdAt ? this.createdAt : Date.now()
  if (this.isModified('title body category tag')) {
    this.updatedAt = Date.now()
  }
  return next()
})

Article.defaultColumns = 'title, createdAt'
Article.defaultSort = '-createdAt'
Article.register()
