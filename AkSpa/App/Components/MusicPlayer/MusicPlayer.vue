<template>
    <div class="musicplayer" v-if="album">
        <h2>{{albumName}}</h2>
        <div class="player-container">
            <div class="album-display">
                <img class="album-img" :src="albumImage"/>
            </div>
            <div class="player-module">
                <div class="playlist">
                    <a class="playlist-element" v-for="track in tracks">{{track.name}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['album', 'tracks'],
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

    .playlist {
        height: 210px;
        overflow: auto;
    }

    .playlist-element {
        display: block;
        color: #a5a2a0;
        padding: 3px 0;
    }
    .musicplayer ::-webkit-scrollbar {
        width: 12px;
    }

    .musicplayer ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
    }

    .musicplayer ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px #a5a2a0;
    }

    .musicplayer ::-moz-scrollbar {
        width: 12px;
    }

    .musicplayer ::-moz-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
    }

    .musicplayer ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px #a5a2a0;
    }
</style>