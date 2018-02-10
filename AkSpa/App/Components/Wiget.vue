<template>
    <text-image 
            v-if="wigetdata.Type==='TextImage'"
            :text="wigetdata.Text"
            :image="wigetdata.Image"></text-image>
</template>
<script>
    import TextImage from './Wigets/TextImage.vue';
    export default {
        props: ['wigetdata'],
        components: {
            TextImage
        }
    }
</script>
<style lang="scss">
 
</style>