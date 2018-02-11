<template>
    <div>
        <text-image v-if="wigetdata.Type==='TextImage'"
                    :text="wigetdata.Text"
                    :image="wigetdata.Image"></text-image>
        <three-puffs v-if="wigetdata.Type==='ThreePuffs'"
                    :text="wigetdata.Text"
                    :image="wigetdata.Image"></three-puffs>
    </div>
</template>
<script>
    import TextImage from './Wigets/TextImage.vue';
    import ThreePuffs from './Wigets/ThreePuffs.vue';
    export default {
        props: ['wigetdata'],
        components: {
            TextImage,
            ThreePuffs
        }
    }
</script>
<style lang="scss">

</style>
