<template>
<header>
    <div class="container" v-on:click="testMethod">
        {{text}}
    </div>
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
    }
</style>