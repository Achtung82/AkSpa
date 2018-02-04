import vue from "vue";
import vuex from "vuex";
import "whatwg-fetch";

vue.use(vuex);

const store = new vuex.Store({
    strict: true,
    state: {
        admin: null,
        page: null,
        pages: null
    },
    mutations: {
        SET_ADMIN: (state, content) => {
            state.admin = content;
        },
        SET_PAGE: (state, content) => {
            state.page = content;
        },
        SET_PAGES: (state, content) => {
            state.pages = content;
        }
    },
    actions: {
        GET_PAGES(context) {
            //fetch("/Page/GetAllPages")
            //    .then(function (response) {
            //        return response.json();
            //    }).then(function (json) {
            //        context.commit("SET_PAGES", json);
            //    });
        }
    },
    getters: {
        admin: state => state.admin,
        page: state => state.page,
        pages: state => state.pages
    }
});

export default store;
