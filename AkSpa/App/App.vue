<template>
    <div>
        <Header />
        <div class="container body-content">
            <transition name="blink" mode="out-in" appear>
                <keep-alive>
                    <router-view :key="key"></router-view>
                </keep-alive>
            </transition>
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
                    routes.push({ path: slug, component: Page, meta: { key: slug } });
                });
                return routes;
            }
        },
        computed: {
            key() {
                return this.$route.meta.key !== undefined
                    ? this.$route.meta.key
                    : this.$route
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
        line-height: 1.4;
        color: $akwhite;
    }

    h1 {
        text-align: center;
    }
</style>