<template>
    <div class="page" v-if="pageData">
        <template v-for="widget in widgets">
            <widget :widgetdata="widget">
            </widget>
        </template>
    </div>
</template>
<script>
    import Widget from '../Widget.vue';

    export default {
        components: {
            Widget
        },
        computed: {
            pageData: function () {
                if (!this.$store.getters.pages) {
                    return false;
                }
                return this.$store.getters.pages[this.$route.path.toLowerCase()];
            },
            widgets: function () {
                if (!this.$store.getters.pages) {
                    return false;
                }
                return JSON.parse(this.$store.getters.pages[this.$route.path.toLowerCase()].widgetsJson);
            }
        },
        watch: {
            pageData: function (val) {
                if (val) {
                    document.title = val.name + " - Alte Kamereren";
                }
            },
        }
    }
</script>
<style lang="scss">
    @import "../../Styles/variables.scss";
    .page {
        color: white;
        padding: 40px 30px;
    }
   
</style>