import Vue from "vue";
import app from "./App"
import store from "./Store/index";
import router from './Router/index';

if (module.hot) {
    module.hot.accept();
}
const vueApp = new Vue({
    el: "#vue-app",
    template: "<App/>",
    components: { App: app },
    store,
    router
});
