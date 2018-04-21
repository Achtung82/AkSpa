<template>
    <div class="page" v-if="pageData">
        <template v-for="widget in widgets">
            <widget :widgetdata="widget">
            </widget>
        </template>
    </div>
</template>
<script>
    import Widget from '../Widgets/Widget.vue';

    export default {
        components: {
            Widget
        },
        computed: {
            pageData: function () {
                if (!this.$store.getters.pages) {
                    return false;
                }
                const data = this.$store.getters.pages[this.$route.path.toLowerCase()];
                if (!data && this.$route.path.toLowerCase() === "/") {
                    this.$router.push("/upcoming");
                }
                return data;
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