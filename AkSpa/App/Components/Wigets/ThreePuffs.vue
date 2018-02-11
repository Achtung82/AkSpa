<template>
    <div class="three-puffs">
        <div class="puff">
            <div class="image-container">
                <div class="image" v-bind:style="{ backgroundImage: imageStyle }">
                </div>
            </div>
        </div>
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
<style lang="scss">
    @import "../../Styles/variables.scss";
    .three-puffs .puff {
        display: block;
        border: 4px solid $akborder-red;
        padding: 10px;
        min-height: 300px;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 20px;
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
        transition: all 0.2s linear;
    }
</style>