import vue from "vue";
import vuex from "vuex";
import "whatwg-fetch";

vue.use(vuex);

const store = new vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
        pages: null
    },
    mutations: {
       
        SET_PAGES: (state, content) => {
            state.pages = content;
        }
    },
    actions: {
        GET_PAGES(context) {
            fetch("/Page/GetAllPages")
                .then(function (response) {
                    return response.json();
                }).then(function (json) {
                    context.commit("SET_PAGES", json);
                });
        }
    },
    getters: {
        pages: state => state.pages
    }
});

export default store;
