<template>
    <div id="app">
        <Header />
        <h1>Välkommen!</h1>
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

    @import './general.scss';

    *, *::before, *::after {
        box-sizing: border-box;
    }

    #app {
        max-width: 400px;
        margin: 0 auto;
        line-height: 1.4;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: $vue-blue;
    }

    h1 {
        text-align: center;
    }
</style>