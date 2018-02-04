<template>
    <div class="page" v-if="pageData">
        <h1>{{pageData.name}}</h1>
        <h2>Subtext</h2>
        <h3>Subtext</h3>
        <h4>Subtext</h4>
    </div>
</template>
<script>
    export default {
        computed: {
            pageData: function () {
                if (!this.$store.getters.pages) {
                    return false;
                }
                return this.$store.getters.pages[this.$route.path.toLowerCase()];
            }
        },
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