<template>
  <div id="app">
    <title-header></title-header>
  </div>
</template>

<script>
import titleHeader from './components/Header.vue'

export default {
  name: 'app',
  components: {
    'title-header': titleHeader
  }
}
</script>

<style>
</style>
