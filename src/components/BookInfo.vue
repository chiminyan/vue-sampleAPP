<template>
    <div class="book-info">
        <div class="basic-info">
            <div class="published-year">
                <h4>発刊年月・イベント名</h4>
                <ul>
                    <li v-for="(info) in infoTexts" v-bind:key="info.id">
                        {{ info.caption }}
                    </li>
                </ul>
            </div>
            <div class="posts-info">
                <h4>関連</h4>
                <ul>
                    <li v-for="(list) in posts" v-bind:key="list.id"><a href="list.url">{{ list.title }}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bookInfo',
    data() {
        return {
            infoTexts: [
                { caption: '2017年' },
                { caption: '4月' },
                { caption: '技術書典2' }
            ],
            posts: [
                { title: 'タイトル',
                    url: 'http://aaaa'
                },
                { title: 'タイトル２',
                    url: 'http://2222'
                }
            ]
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