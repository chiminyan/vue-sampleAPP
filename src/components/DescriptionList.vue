<template>
    <div class="description-list">
        <div class="overview">
            <h3>ちみポイント</h3>
            <ul>
                <li v-for="(item) in overviews" v-bind:key="item.id">
                    {{ item.promotion }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'descriptionList',
    data() {
        return {
            overviews: [
                { promotion: 'ポイント１' },
                { promotion: 'ポイント２' },
                { promotion: 'ポイント３' }
            ]
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