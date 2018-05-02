<template>
    <div class="music">
        <span v-for="album in albums">{{album}}</span>
    </div>
</template>
<script>
    export default {
        props: ['albums'],
        created() {
            this.$store.dispatch("GET_ALBUMS", this.albums);
        }
    }
</script>
<style lang="scss">
    @import "../../Styles/variables.scss";
    
</style>