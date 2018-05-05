<template>
    <div class="musicplayer" v-if="album">
        <h2>{{albumName}}</h2>
        <div class="player-container">
            <div class="album-display">
                <img class="album-img" :src="albumImage"/>
            </div>
            <div class="player-module">

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['album'],
        created() {
            //this.$store.dispatch("GET_ALBUMS", this.albumsIds);
        },
        computed: {
            albumName: function () {
                if (this.album) {
                    return this.album.name;
                }
                return "";
            },
            albumImage: function () {
                if (this.album) {
                    return "https://www.altekamereren.org" + this.album.image;
                }
                return "";
        }
        }
    }
</script>
<style lang="scss">
    $bg-color: #111111;
    .musicplayer h2 {
        background-color: $bg-color;
        border-radius: 5px;
        padding: 10px 20px;
        margin-bottom: 20px;
        text-transform: uppercase;
    }

    .player-container {
        display: flex;
        background-color: $bg-color;
        border-radius: 5px;
        padding: 20px;
        max-height: 320px;
    }

    .album-display {
        flex-grow: 1;
        text-align: center;
        max-width: 290px;
        margin: auto;
    }

    .album-display .album-img {
        height: 220px;
        max-width: 220px;
        vertical-align: middle;
    }

    .player-module {
        flex-grow: 1;
        padding-left: 30px;
    }
</style>