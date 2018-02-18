import Vue from "vue";
import VueRouter from "vue-router";
import Page from "../Components/Pages/Page.vue";
import Upcoming from "../Components/Pages/Upcoming.vue";
import store from "../Store/index";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Page, meta: { key: '/' } },
        { path: "/upcomming", component: Upcoming, meta: { key: '/upcomming' } }
    ]
});

export default router;