<template>
    <div class="description-list">
        <div class="overview">
            <h3>ポイント</h3>
            <ul>
                <li v-for="item in promotionData" v-bind:key="item.id">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import bookData from '../assets/book-data.json'
export default {
    name: 'descriptionList',
    props: ['id'],
    data() {
        return {
            bookData: bookData,
        }
    },
    computed: {
        promotionData: function() {
            // 繰り返し処理で overviews_promotion の値を全部抜いて新しい配列を作り、 return する
            const arrayLength = bookData[this.id].overviews.length;
            const arrayData = bookData[this.id].overviews;
            const promotions = [];
            for (let count = 0; count < arrayLength; count++) {
                const data = arrayData[count].overviews_promotion;
                promotions.push(data);
            }
            return promotions;
        }
    }
}
</script>

<style scoped>
.description-list {
    height: 250px;
    margin-top: 20px;
    width: 570px;
}
h3 {
    font-size: 24px;
}
li {
    font-size: 16px;
    line-height: 26px;
}
</style>