<template>
    <div>
        <Header />
        <div class="body-content">
            <h1>Välkommen!</h1>
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
        color: $vue-blue;
    }

    h1 {
        text-align: center;
    }
</style>