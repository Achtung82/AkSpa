import Vue from "vue";
import app from "./App"
import store from "./Store/index";
import router from './Router/index';

const vueApp = new Vue({
    el: "#vue-app",
    template: "<App/>",
    components: { App: app },
    store,
    router
});
