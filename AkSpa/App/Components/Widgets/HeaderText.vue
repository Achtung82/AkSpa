<template>
    <div class="header-text" v-bind:style="{ backgroundImage: 'url(https://www.altekamereren.org' + image + ')'}">
        <h1 v-html="text">
        </h1>
    </div>
</template>
<script>
    export default {
        props: ['text', 'image']
    }
</script>
<style lang="scss">
    @import "../../Styles/variables.scss";
    .header-text {
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 200px;
        position: relative;
    }
    .header-text:after {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #333;
        opacity: 0.3;
        content: "";
        display: block;
    }
    .header-text h1 {
        color: $akwhite;
        font-size: 2.3rem;
        text-transform: uppercase;
        text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
        z-index: 1;
    }

    @media (max-width: 767px) {

        .header-text h1 {
            font-size: 1.8rem;
        }
    }
</style>