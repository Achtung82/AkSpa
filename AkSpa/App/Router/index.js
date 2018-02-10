import Vue from "vue";
import VueRouter from "vue-router";
import Page from "../Components/Page.vue";
import store from "../Store/index";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [{ path: "/", component: Page }]
});

export default router;