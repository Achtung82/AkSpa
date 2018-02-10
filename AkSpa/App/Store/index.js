import vue from "vue";
import vuex from "vuex";
import "whatwg-fetch";

vue.use(vuex);

const store = new vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
        pages: null,
        menus: null
    },
    mutations: {
        SET_PAGES: (state, content) => {
            state.pages = content;
        },
        SET_MENUS: (state, content) => {
            state.menus = content;
        }
    },
    actions: {
        GET_PAGES(context) {
            return new Promise((resolve, reject) => {
                fetch("/Page/GetAllPages")
                    .then(function(response) {
                        return response.json();
                    }).then(function(json) {
                        context.commit("SET_PAGES", json);
                        resolve("Pages stored successfully");
                    }).catch((err) => {
                        reject("Storage of Pages failed");
                    });
            });
        },
        GET_MENUS(context) {
            return new Promise((resolve, reject) => {
                fetch("/Menu/GetAllMenus")
                    .then(function(response) {
                        return response.json();
                    }).then(function(json) {
                        context.commit("SET_MENUS", json);
                        resolve("Menus stored successfully");
                    }).catch((err) => {
                        reject("Storage of Menus failed");
                    });
            });
        }
    },
    getters: {
        pages: state => state.pages,
        menus: state => state.menus
    }
});

export default store;
