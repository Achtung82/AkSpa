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
<style lang="scss">
    .text-image{
        display: flex;
    } 
    .text-image .text h1{
        text-align: left;
    }
    .text-image .image {
        max-width: 33%;
    }
    .text-image .image img {
        width: 100%;
    }
</style>