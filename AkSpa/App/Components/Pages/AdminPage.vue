<template>
    <div class="admin-page">
        <h1>Admin!</h1>
    </div>
</template>
<script>
    export default {
        created() {
            console.log(this.$route.path);
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../Styles/variables.scss";
    .admin-page {
        color: yellow;
    }
   
</style>