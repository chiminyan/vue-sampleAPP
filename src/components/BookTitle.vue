<template>
    <div class="book-title">
        <div class="fanbook-title">
            <div class="fan-book" v-bind:title="item">{{ item }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bookTitle',
    data() {
        return {
            item: "ログと情報"
        }
    }
}
</script>

<style scoped>
.book-title {
    background-color: rgb(255, 226, 255);
    color: rgb(105, 49, 119);
    font-size: 30px;
}
.fanbook-title {
    width: 520px;
}
</style>