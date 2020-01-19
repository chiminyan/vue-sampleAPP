<template>
    <div class="booth-button">
        <div class="button">
            <a href="booth.url"><p>購入する</p></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'boothButton',
    data() {
        return {
            booth: [
                {
                    url: 'https://aaaa'
                }
            ]
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