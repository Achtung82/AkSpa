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
    
</style>