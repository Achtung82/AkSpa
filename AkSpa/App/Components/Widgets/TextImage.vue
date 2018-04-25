<template>
    <div class="text-image">
        <div class="text" v-html="text">
        </div>
        <div class="image"><img :src="'https://www.altekamereren.org' + image"/></div>
    </div>
</template>
<script>
    export default {
        props: ['text', 'image']
    }
</script>
<style lang="scss" scoped>
    .text-image .text h1{
        text-align: left;
    }
    .text-image .image {
        max-width: 33%;
    }
    .text-image .image img {
        width: 100%;
    }
    @media (max-width: 767px) {
        .text-image .image {
            display: none;
        }
    }
    @media (min-width: 768px) {
        .text-image .text {
            margin-right: 30px;
        }
        .text-image {
            display: flex;
        } 
    }
</style>