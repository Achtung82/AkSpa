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
    @import '../general.scss';

    header {
        background-color: $vue-green;
    }
</style>