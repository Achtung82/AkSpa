<template>
    <div class="page">
        <h1>Välkommen!</h1>
        <h2>Subtext</h2>
        <h3>Subtext</h3>
        <h4>Subtext</h4>
        <span v-for="word in content">{{word}}</span>
    </div>
</template>
<script>
    export default {
        computed: {
            content() {
                return this.$store.getters.page;
            }
        },
        created() {
            this.$store.dispatch("GET_PAGE_CONTENT");
        }
    }
</script>
<style lang="scss">
    @import "../Styles/variables.scss";
    .page{
        color: white;   
    }
   
</style>