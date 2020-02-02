<template>
  <div id="app">
    <div class="header">
      <title-header></title-header>
      <book-title></book-title>
    </div>
    <div class="main">
      <button class="back_button" type="button">
        <img v-bind:src="left_arrow" alt="back">
      </button>
      <div class="left-contents">
        <book-image></book-image>
        <description-list></description-list>
      </div>
      <div class="right-contents">
        <book-description></book-description>
        <book-info></book-info>
        <booth-button></booth-button>
      </div>
      <button class="next_button">
        <img v-bind:src="right_arrow" alt="next">
      </button>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import './normalize.css'
import titleHeader from './components/Header.vue'
import bookDescription from './components/BookDescription.vue'
import bookImage from './components/BookImage.vue'
import bookInfo from './components/BookInfo.vue'
import bookTitle from './components/BookTitle.vue'
import boothButton from './components/BoothButton.vue'
import descriptionList from './components/DescriptionList.vue'
import pageFooter from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    'title-header': titleHeader,
    'book-description': bookDescription,
    'book-image': bookImage,
    'book-info': bookInfo,
    'book-title': bookTitle,
    'booth-button': boothButton,
    'description-list': descriptionList,
    'page-footer': pageFooter
  },
  data() {
    return {
      left_arrow:require("./assets/arrow/baseline-keyboard_arrow_left-24px.svg"),
      right_arrow:require("./assets/arrow/baseline-keyboard_arrow_right-24px.svg"),
    }
  }
}
</script>

<style>
  #app {
    background-color: rgb(255, 226, 255);
  }
  .main {
    display: flex;
    margin: 20px;
  }

  button {
    background-color: #0066FF;
    border: none;
    height: 30px;
    width: 30px;
  }

  .book-title {
    margin: 10px;
  }

  .left-contents {
    width: 50%;
  }

  .book-image {
    margin-left: 10px;
  }
  .right-contents {
    width: 50%;
  }
</style>
