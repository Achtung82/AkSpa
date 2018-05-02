<template>
    <div class="music">
        <span v-for="album in albums">{{album}}</span>
    </div>
</template>
<script>
    export default {
        props: ['albumsIds'],
        created() {
            this.$store.dispatch("GET_ALBUMS", this.albumsIds);
        },
        computed: {
            albums: function () {
                return this.$store.getters.albums;
            }
        }
    }
</script>
<style lang="scss">
    @import "../../Styles/variables.scss";
    
</style>