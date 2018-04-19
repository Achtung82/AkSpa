<template>
    <div class="widget">
        <text-widget v-if="widgetdata.Type==='Text'"
                     :text="widgetdata.Text"></text-widget>
        <text-image v-if="widgetdata.Type==='TextImage'"
                    :text="widgetdata.Text"
                    :image="widgetdata.Image"></text-image>
        <three-puffs v-if="widgetdata.Type==='ThreePuffs'"
                     :text="widgetdata.Text"
                     :image="widgetdata.Image"></three-puffs>
        <header-text v-if="widgetdata.Type==='HeaderText'"
                     :text="widgetdata.Text"
                     :image="widgetdata.Image"></header-text>
        <hire v-if="widgetdata.Type==='Hire'"
              :text="widgetdata.Text"></hire>
        <join v-if="widgetdata.Type==='Join'"
              :text="widgetdata.Text"></join>
    </div>
</template>
<script>
    import TextImage from './Widgets/TextImage.vue';
    import TextWidget from './Widgets/TextWidget.vue';
    import ThreePuffs from './Widgets/ThreePuffs.vue';
    import Hire from './Widgets/Hire.vue';
    import Join from './Widgets/Join.vue';
    import HeaderText from './Widgets/HeaderText.vue';

    export default {
        props: ['widgetdata'],
        components: {
            TextImage,
            ThreePuffs,
            TextWidget,
            Hire,
            HeaderText,
            Join
        }
    }
</script>
<style lang="scss">
    .widget{
        margin-bottom: 30px;
    }
</style>
