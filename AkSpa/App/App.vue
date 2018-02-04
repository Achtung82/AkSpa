<template>
    <div>
        <Header />
        <div class="body-content">
            <router-view></router-view>
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