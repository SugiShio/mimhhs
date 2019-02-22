const keystone = require('keystone')
const Types = keystone.Field.Types
const Profile = new keystone.List('Profile')

Profile.add({
  name: { type: String },
  profile: { type: Types.Markdown },
  githubAccount: { type: String },
  twitterAccount: { type: String },
  facebookAccount: { type: String }
})

Profile.defaultColumns = 'name'
Profile.register()
