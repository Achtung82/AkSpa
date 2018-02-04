import Vue from "vue";
import app from "./App"
import store from "./Store/store";

const vueApp = new Vue({
    el: "#vue-app",
    template: "<App/>",
    components: { App: app },
    store: store
});
