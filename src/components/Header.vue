<template>
  <div class="title-header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'titleHeader',
  data () {
    return {
      title: '本の紹介ページ'
    }
  }
}
</script>

<style scoped>
h1 {
  align-items: center;
  background-color: rgb(105, 49, 119);
  color: rgb(255, 226, 255);
  display: flex;
  font-size: 28px;
  height: 100px;
  margin: 0;
}
</style>
