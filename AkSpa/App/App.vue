<template>
    <div>
        <Header />
        <div class="body-content">
            <Page />
        </div>
    </div>
</template>
<script>
    import Header from './Components/Header.vue'
    import Page from './Components/Page.vue'

    export default {
        components: {
            Header,
            Page
        },
        created() {
            this.$store.dispatch("GET_MENUS");
        }
    }
</script>
<style lang="scss">

    @import "./Styles/general.scss";

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