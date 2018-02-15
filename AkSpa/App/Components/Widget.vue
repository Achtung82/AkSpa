<template>
    <div class="widget">
        <text-image v-if="widgetdata.Type==='TextImage'"
                    :text="widgetdata.Text"
                    :image="widgetdata.Image"></text-image>
        <three-puffs v-if="widgetdata.Type==='ThreePuffs'"
                    :text="widgetdata.Text"
                    :image="widgetdata.Image"></three-puffs>
    </div>
</template>
<script>
    import TextImage from './Widgets/TextImage.vue';
    import ThreePuffs from './Widgets/ThreePuffs.vue';
    export default {
        props: ['widgetdata'],
        components: {
            TextImage,
            ThreePuffs
        }
    }
</script>
<style lang="scss">
    .widget{
        margin-bottom: 30px;
    }
</style>
