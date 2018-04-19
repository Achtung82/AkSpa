<template>
    <div class="alerts-field"
         v-bind:class="{hidden: !show}">
        <div :class="errorType">
            {{text}}
        </div>
    </div>
</template>
<script>

    export default {
        props: ['text','show','error'],
        computed: {
            errorType: function () {
                if (this.error) {
                    return "alert alert-error show";
                } else {
                    return "alert alert-success show";
                }
            }
        },
    }
</script>
<style lang="scss">
    @import "../Styles/variables.scss";

    .alert {
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 1px 2px rgba(0, 0, 0, 0.05);
        padding: 0.5rem;
        margin: 10px 0;
        overflow: hidden;
        display: none;
    }
    .alert.show{
        display: block;
    }
    .alert.alert-success {
        background-image: linear-gradient(to bottom, #dff0d8 0%, #c8e5bc 100%);
        border: 1px solid #b2dba1;
    }
    .alert.alert-error {
        background-image: linear-gradient(to bottom, #f5e9e7 0%, #ead0cc 100%);
        border: 1px solid #dfb7b1;
        color: #bc695e;
    }
    .alerts-field {
        transition: max-height ease-in .5s;
        overflow: hidden;
        max-height: 100px;
    }
    .alerts-field.hidden {
        max-height: 0;
    }
</style>
