<template>
    <div>
        <Header />
        <div class="body-content">
            <h1>Välkommen!</h1>
            <h2>Subtext</h2>
            <h3>Subtext</h3>
            <h4>Subtext</h4>
        </div>
    </div>
</template>
<script>
    import Header from './Components/Header.vue'

    export default {
        components: {
            Header
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