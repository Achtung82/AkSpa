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
    import Page from './Components/Pages/Page.vue'
    import AdminPage from './Components/Pages/AdminPage.vue'

    export default {
        components: {
            Header,
            Page,
            AdminPage
        },
        created() {
            var self = this;
            this.$store.dispatch("GET_ACCOUNT_INFO");
            this.$store.dispatch("GET_PAGES");
            this.$store.dispatch("GET_MENUS");
        },
        computed: {
            key() {
                return this.$route.meta.key !== undefined
                    ? this.$route.meta.key
                    : location.pathname;
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