<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'titleHeader',
  data () {
    return {
      title: '同人誌展示会場'
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
