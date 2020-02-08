<template>
    <div class="booth-button">
        <div class="button">
            <a v-bind:href="boothUrl"><p>サイトを見る</p></a>
        </div>
    </div>
</template>

<script>
import bookData from '../assets/book-data.json'
export default {
    name: 'boothButton',
    props: ['id'],
    data() {
        return {
            bookData: bookData
        }
    },
    computed: {
        boothUrl: function() {
            // JSON から BOOTH の URL を取得して返却する
            return bookData[this.id].booth_url;
        }
    }
}
</script>

<style scoped>
.booth-button {
    margin-top: 60px;
    height: 200px;
}
.button {
    display: flex;
    flex-direction: center;
    justify-content: center;
}
a {
    background-color: rgb(165, 88, 152);
    color: rgb(51, 25, 38);
    font-size: 20px;
    font-weight: bold;
    height: 60px;
    text-align: center;
    text-decoration: none;
    width: 400px;
}
</style>