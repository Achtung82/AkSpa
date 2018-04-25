<template>
    <div class="hire">
        <div class="video-bg">
            <div class="video-bg-content">
                <h1>Vill du anlita oss?</h1>
            </div>
            <video autoplay muted loop class="video">
                <source src="/videos/akslowmo.mp4" type="video/mp4">
            </video>
        </div>
        <div v-html="text">
        </div>
    </div>
</template>
<script>
    export default {
        props: ['text']
    }
</script>
s<style lang="scss">
    @import "../../Styles/variables.scss";

    .video-bg {
        position: relative;
        height: 200px;
        overflow: hidden;
        margin-bottom: 20px;
    }
    .video-bg .video-bg-content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .video-bg .video-bg-content h1 {
        color: $akwhite;
        font-size: 2.3rem;
        text-align: center;
        z-index: 1;
        margin: 0;
        text-transform: uppercase;
        text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
    }
    .video-bg .video {
        position: absolute;
        min-width: 100%;
        min-height: 100%;
        width: 100%;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @media screen and (max-width: 767px) {
        .video-bg .video {
            width: auto;
            height: 175%;
        }
        .video-bg .video-bg-content h1 {
            font-size: 1.8rem;
        }
    }
</style>