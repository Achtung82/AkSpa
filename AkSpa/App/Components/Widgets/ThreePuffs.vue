<template>
    <div class="three-puffs">
        <router-link to="/upcoming" class="puff">
            <div class="image-container">
                <div class="image" v-bind:style="{ backgroundImage: imageStyle }">
                </div>
            </div>
            <div v-html="text"></div>
        </router-link>
        <router-link to="/hire" class="puff middle-puff">
            <div class="image-container">
                <div class="image" style="background-image: url('https://www.altekamereren.org/images/skivomslag.JPG')">
                </div>
            </div>
            <div>
                <p>Anlita oss</p>
            </div>
        </router-link>
        <router-link to="/join" class="puff">
            <div class="image-container">
                <div class="image" style="background-image: url('https://www.altekamereren.org/images/spelamedoss.jpg')">
                </div>
            </div>
            <div>
                <p>Gå med</p>
            </div>
        </router-link>
    </div>  
</template>
<script>
    export default {
        props: ['text', 'image'],
        computed: {
            imageStyle: function () {
                return 'url(https://www.altekamereren.org' + this.image + ')';
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../Styles/variables.scss";
   .three-puffs .puff {
        flex-grow: 1;
        display: block;
        border: 4px solid $akborder-red;
        padding: 10px;
        min-height: 300px;
        font-size: 1rem;
        font-weight: 400;
        min-width: 200px;
        color: $akwhite;
    }
    .three-puffs .middle-puff {
        margin: 0 30px;
    }
    .three-puffs .image-container {
        height: 220px;
        position: relative;
        margin-bottom: 10px;
        overflow: hidden;
    }
    .three-puffs .puff .image {
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        transition: transform 0.2s linear;
    }
       
    @media (max-width: 767px) {
        .three-puffs .puff {
            width: 100%;
            margin: 30px 0;
        }
        .three-puffs .middle-puff {
            margin: 30px 0;
        }
    }
    @media (min-width: 768px) {
        .three-puffs {
            display: flex;
        }
        .three-puffs .puff:hover .image {
            transform: scale(1.2);
        }
    }
</style>