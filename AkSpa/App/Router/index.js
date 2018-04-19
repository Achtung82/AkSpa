import Vue from "vue";
import VueRouter from "vue-router";
import Page from "../Components/Pages/Page.vue";
import Upcoming from "../Components/Pages/Upcoming.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "*", component: Page, meta: { key: '/' } },
        { path: "/upcoming", component: Upcoming, meta: { key: '/upcoming' } }
    ]
});

export default router;