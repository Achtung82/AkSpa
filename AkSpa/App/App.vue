<template>
    <div>
        <Header />
        <div class="body-content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
    import Header from './Components/Header.vue'
    import Page from './Components/Page.vue'
    import AdminPage from './Components/AdminPage.vue'

    export default {
        components: {
            Header,
            Page,
            AdminPage
        },
        created() {
            var self = this;
            this.$store.dispatch("GET_PAGES").then(function () {
                self.$router.addRoutes(self.getRoutes());
            });
            this.$store.dispatch("GET_MENUS");
        },
        methods: {
            getRoutes() {
                const routes = [];
                Object.keys(this.$store.getters.pages).forEach(function (slug) {
                    routes.push({ path: slug, component: Page });
                });
                return routes;
            }
        }
    }
</script>
<style lang="scss">

    @import "./Styles/index.scss";

    *, *::before, *::after {
        box-sizing: border-box;
    }

    .body-content {
        max-width: 400px;
        margin: 0 auto;
        line-height: 1.4;
        color: $akwhite;
    }

    h1 {
        text-align: center;
    }
</style>