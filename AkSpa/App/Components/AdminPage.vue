<template>
    <div class="admin-page">
        <h1>Admin!</h1>
        <span v-for="word in content">{{word}}</span>
    </div>
</template>
<script>
    export default {
        computed: {
            content() {
                return this.$store.getters.admin;
            }
        },
        created() {
            this.$store.dispatch("GET_ADMIN_CONTENT");
        }
    }
</script>
<style lang="scss">
    @import "../Styles/variables.scss";
    .admin-page {
        color: yellow;
    }
   
</style>