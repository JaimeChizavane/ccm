<template>
  <div>
    <q-header/>
    <q-slider/>
    <q-portfolio/>
    <q-team/>
    <q-social-messages/>
    <q-partners/>
    <q-blog-latest/>
    <q-news-letter/>
    <q-footer/>
  </div>
</template>

<script>
import QHeader from "../components/Header/Header";
import QFooter from "../components/Footer";
import QSlider from "../components/Misc/Slider";
import QBlogLatest from "../components/Blog/Latest";
import QPortfolio from "../components/Portfolio/Portfolio";
import QTeam from "../components/Team";
import QPartners from "../components/Partners";
import QNewsLetter from "../components/NewsLetter";
import QSocialMessages from "../components/SocialMessages";

export default {
  name: "QHome",
  components: { QSocialMessages, QNewsLetter, QPartners, QTeam, QPortfolio, QBlogLatest, QSlider, QFooter, QHeader },
  mounted() {
    window.mainExecution(window.$)
  }
}
</script>

<style scoped>

</style>
