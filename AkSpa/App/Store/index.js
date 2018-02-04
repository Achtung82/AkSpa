import vue from "vue";
import vuex from "vuex";
import "whatwg-fetch";

vue.use(vuex);

const store = new vuex.Store({
    strict: true,
    state: {
        admin: null,
        page: null
    },
    mutations: {
        SET_ADMIN: (state, content) => {
            state.admin = content;
        },
        SET_PAGE: (state, content) => {
            state.page = content;
        }
    },
    actions: {
        GET_PAGE_CONTENT(context) {
            fetch("/Page/GetPageContent")
                .then(function (response) {
                    return response.json();
                }).then(function (json) {
                    context.commit("SET_PAGE", json);
                });
        },
        GET_ADMIN_CONTENT(context) {
            fetch("/Page/GetAdminContent")
                .then(function (response) {
                    return response.json();
                }).then(function (json) {
                    context.commit("SET_ADMIN", json);
                });
        }
    },
    getters: {
        admin: state => state.admin,
        page: state => state.page
    }
});

export default store;
