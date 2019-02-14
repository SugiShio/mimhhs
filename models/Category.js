const keystone = require('keystone')

const Category = new keystone.List('Category')

Category.add({
  name: { type: String, required: true, initial: true }
})

Category.schema.virtual('canAccessKeystone').get(function() {
  return true
})

Category.defaultColumns = 'name'
Category.register()
