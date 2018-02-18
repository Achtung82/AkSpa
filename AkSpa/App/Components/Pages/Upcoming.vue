<template>
    <div class="upcoming-page">
        <template v-for="eventyear in events">
            <h2>{{getYear(eventyear)}}</h2>
            <template v-for="event in eventyear">
                <div>
                    {{event.name}}
                </div>
            </template>
        </template>
    </div>
</template>
<script>
    export default {
        computed: {
            events: function () {
                return this.$store.getters.events;
            }
        },
        methods: {
            getYear(eventyear) {
                var date = new Date(eventyear[0].day);
                return date.getFullYear();
            }
        },
        created() {
            this.$store.dispatch("GET_EVENTS");
        }
    }
</script>
<style lang="scss">
    @import "../../Styles/variables.scss";
   
</style>