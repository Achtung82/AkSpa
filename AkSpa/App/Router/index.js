import Vue from "vue";
import VueRouter from "vue-router";

import Page from "../Components/Page.vue";
import AdminPage from "../Components/AdminPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Page },
        { path: "/admin", component: AdminPage }
    ]
});

export default router;