import vue from "vue";
import vuex from "vuex";
import "whatwg-fetch";

vue.use(vuex);

const store = new vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
        pages: null,
        menus: null,
        events: null,
        loggedin: false,
        username: null
    },
    mutations: {
        SET_PAGES: (state, content) => {
            state.pages = content;
        },
        SET_MENUS: (state, content) => {
            state.menus = content;
        },
        SET_EVENTS: (state, content) => {
            state.events = content;
        },
        SET_LOGGEDIN_STATE: (state, content) => {
            state.loggedin = content;
        },
        SET_USERNAME: (state, content) => {
            state.loggedin = content;
        }
    },
    actions: {
        GET_PAGES(context) {
            return fetch("/api/Page",
                    { credentials: "same-origin" }
                )
                .then(function(response) {
                    return response.json();
                }).then(function (json) {
                    context.commit("SET_PAGES", json);
                });
        },
        GET_MENUS(context) {
            return fetch("/api/Menu",
                    { credentials: "same-origin" }
                )
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                    context.commit("SET_MENUS", json);
                });
        },
        GET_EVENTS(context) {
            return fetch("/api/Event",
                    { credentials: "same-origin" }
                )
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                    context.commit("SET_EVENTS", json);
                });
        },
        GET_ACCOUNT_INFO(context) {
            return fetch("/account/AccountInfo",
                    { credentials: "same-origin" }
                )
                .then(function (response) {
                    return response.json();
                }).then(function (json) {
                    if (json.loggedin) {
                        context.commit("SET_USERNAME", name);
                        context.commit("SET_LOGGEDIN_STATE", true);
                    } else {
                        context.commit("SET_LOGGEDIN_STATE", false);
                    }
                });
        }
    },
    getters: {
        pages: state => state.pages,
        menus: state => state.menus,
        events: state => state.events,
        loggedin: state => state.loggedin,
        username: state => state.username
    }
});

export default store;
