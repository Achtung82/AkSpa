<template>
<header>
    <div class="container" v-on:click="testMethod">
        {{text}}
    </div>
    <nav>
        <a class="menu-link" href="">hej</a>
        <a class="menu-link" href="">hej</a>
        <a class="menu-link" href="">hej</a>
    </nav>
</header>
</template>
<script>
    export default {
        data() {
            return {
                text: 'hajsan',
            }
        },
        methods: {
            testMethod() {
                console.log("Hej");
            }
        }
    }
</script>
<style lang="scss">
    @import "../Styles/variables.scss";

    header {
        background-color: $akred;
        display: block;
        position: relative;
        border-bottom: 2px solid #1a1a1a;
        padding: 15px 0 0;
    }
    header nav {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        margin-top: 15px;
        padding: 0.4em;
        background: $akgrey;
    }
    nav .menu-link {
        color: $akwhite;
    }
</style>