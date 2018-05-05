<template>
    <div class="music">
        <music-player :album="selectedAlbum">
        </music-player>
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
    import MusicPlayer from '../MusicPlayer/MusicPlayer.vue';

    export default {
        props: ['albumsIds'],
        components: {
            MusicPlayer
        },
        created() {
            this.$store.dispatch("GET_ALBUMS", this.albumsIds);
        },
        computed: {
            albums: function () {
                return this.$store.getters.albums;
            }
        },
        watch: {
            albums: function () {
                if (this.albums) {
                    const keys = Object.keys(this.albums);
                    if (keys.length > 0) {
                        this.selectedAlbum = this.albums[keys[0]];
                    }
                }
            }
        },
        data: function () {
            return {
                selectedAlbum: null
            }
        },
        methods: {
            getImgLink: function(album) {
                return "https://www.altekamereren.org/" + album.image;
            },
            albumClick: function (album) {
                this.selectedAlbum = album;
            }
        }
    }
</script>
<style lang="scss">
    @import "../../Styles/variables.scss";
    .album-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .album-list .album-img {
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