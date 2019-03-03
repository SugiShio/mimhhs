module.exports = function(req, res) {
  const Profile = require('keystone').list('Profile')

  Profile.model
    .find({}, 'name profile githubAccount facebookAccount twitterAccount')
    .exec((error, data) => {
      if (error) {
        res.json(error)
      } else {
        res.json(data[0])
      }
    })
}
