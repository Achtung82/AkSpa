<template>
    <div class="music">
        <div class="album-list">
            <div class="album" v-for="album in albums">
                <a href="#" class="album-link" v-on:click.prevent="albumClick(album)">
                    <img class="album-img" :src="getImgLink(album)" />
                    <p class="name">{{album.name}}</p>
                </a>
            </div>
        </div>
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
        },
        methods: {
            getImgLink: function(album) {
                return "https://www.altekamereren.org/" + album.image;
            },
            albumClick: function (album) {
                console.log(album.name);
            }
        }
    }
</script>
<style lang="scss">
    @import "../../Styles/variables.scss";
    .album-list {
        display: flex;
        flex-wrap: wrap;
    }
    .album-img {
        height: 100px;
        max-width: 100px;
    }
    .album {
        padding: 10px 10px;
        width: 130px;
        position: relative;
    }
    .album-link {
        width: 100%;
        display: block;
        text-align: center;
    }
    .album .name {
        text-align: center;
        font-size: 0.9rem;
        margin-top: 0;
    }
</style>