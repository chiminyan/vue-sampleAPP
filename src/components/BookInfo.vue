<template>
    <div class="book-info">
        <div class="basic-info">
            <div class="published-year">
                <h4>発刊年月・イベント名</h4>
                <ul>
                    <li v-for="info in infoTexts" v-bind:key="info.id">
                        {{ info }}
                    </li>
                </ul>
            </div>
            <div class="posts-info">
                <h4>関連URL</h4>
                <ul>
                    <li v-for="list in posts" v-bind:key="list.id"><a v-bind:href="list.url">{{ list }}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import bookData from '../assets/book-data.json'
export default {
    name: 'bookInfo',
    props: ['id'],
    data() {
        return {
            bookData: bookData
        }
    },
    computed: {
        infoTexts: function() {
            const info = [];
            // JSON から infoTexts に必要なデータを抜く。データは1冊の本に1つしかないのがわかっているので、配列の一番目の値を取得する。
            const arrayData = bookData[this.id].book_info;
            const year = arrayData[0].year;
            const month = arrayData[0].month;
            const eventName = arrayData[0].event_name;
            // 定数から配列を作成する。
            info.push(year);
            info.push(month);
            info.push(eventName);
            return info;
        },
        posts: function() {
            // 最終的に返却したい配列を定義
            const url = [];
            // JSON 内の book_url の配列の長さ・配列のデータを取得し、本の URL の値だけを持っている配列を作成する。
            const arrayLength = bookData[this.id].book_url.length;
            const arrayData = bookData[this.id].book_url;
            for(let count = 0; count < arrayLength; count++){
                const data = arrayData[count].book_url_url;
                url.push(data);
            }
            return url;
        }
    }
}
</script>

<style scoped>
.book-info {
    font-size: 16px;
    line-height: 26px;
}
.published-info {
    margin-right: 5px;
}
h4 {
    font-size: 20px;
}
</style>