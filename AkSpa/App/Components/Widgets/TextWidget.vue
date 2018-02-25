<template>
    <div class="text-widget" v-html="text">
    </div>
</template>
<script>
    export default {
        props: ['text']
    }
</script>
<style lang="scss">
    .text-widget {
        display: flex;
        flex-flow: row wrap;
    }
    .col-sm-4 {
        flex-grow: 1;
        display: block;
    }
    .col-xs-12 {
        min-width: 100%;
        display: block;
    }
    @media (max-width: 567px) {
        .col-sm-4 {
            flex-grow: 1;
            min-width: 100%;
        }
    }
</style>