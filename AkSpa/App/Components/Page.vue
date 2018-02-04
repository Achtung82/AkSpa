<template>
    <div class="page"  v-on:click="testMethod">
        <h1>Välkommen!</h1>
        <h2>Subtext</h2>
        <h3>Subtext</h3>
        <h4>Subtext</h4>
    </div>
</template>
<script>
    export default {
        methods: {
            testMethod() {
                console.log("Hej");
                console.log(this.message);
            }
        },
        created: function () {
            this.message = "Hello!";
        }
    }
</script>
<style lang="scss">
    @import "../Styles/variables.scss";
    .page{
        color: white;   
    }
   
</style>