<template>
    <div class="page">
        <h1>Välkommen!</h1>
        <h2>Subtext</h2>
        <h3>Subtext</h3>
        <h4>Subtext</h4>
    </div>
</template>
<script>
    export default {
        created() {
            console.log(this.$route.path);
        }
    }
</script>
<style lang="scss">
    @import "../Styles/variables.scss";
    .page{
        color: white;   
    }
   
</style>