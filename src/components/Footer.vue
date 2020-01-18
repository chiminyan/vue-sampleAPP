<template>
  <div class="page-footer">
    <div class="icons">
      <a href="https://twitter.com/chiminyan3591" target="blank"><img :src="twitter_src" alt="twitter"></a>
      <a href="https:github.com/chiminyan/vue-sampleAPP" target="blank"><img :src="github_src" alt="github"></a>
    </div>
    <div class="copyright">
      <p>©️   2020 ちみ</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageFooter',
  data () {
    return {
      twitter_src: require("../assets/footer/twitter.svg"),
      github_src: require("../assets/footer/github.svg")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  background-color: rgb(105, 49, 119);
  color: rgb(255, 226, 255);
  height: 100px;
}
</style>
