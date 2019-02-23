<template lang="pug">
  <div>
    <h2 class='m-main__title'>Profile</h2>
    <section class="m-profile">
      <h3>{{ name }}</h3>
      <div class='m-profile__content' v-html='profile'></div>
      <ul>
        <li v-if='github'>
          <a class="m-main__link" target="_blank" :href='"https://github.com/"+github'>{{ github }}</a>
        </li>
        <li v-if='twitter'>
          <a class="m-main__link" target="_blank" :href='"https://twitter.com/"+twitter'>{{ twitter }}</a>
        </li>
        <li v-if='facebook'>
          <a class="m-main__link" target="_blank" :href='"https://www.facebook.com/"+facebook'>{{ facebook }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import Util from '../../util.js'
const CONTENT_TYPE = 'profile'
export default {
  data() {
    return {
      name: '',
      profile: '',
      github: false,
      twitter: false,
      facebook: false
    }
  },
  mounted() {
    Util.fetchItems(CONTENT_TYPE).then(data => {
      this.name = data.name
      this.profile = Util.nToBr(data.profile.html)
      this.github = data.githubAccount || false
      this.twitter = data.twitterAccount || false
      this.facebook = data.facebookAccount || false
    })
  }
}
</script>
