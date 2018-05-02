import vue from "vue";
import vuex from "vuex";
import { getJson, postObject } from "../Utils/apiservices";

vue.use(vuex);

const store = new vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
        pages: null,
        menus: null,
        events: null,
        loggedin: false,
        username: null,
        roles: null,
        albums: {}
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
        },
        SET_ROLES: (state, content) => {
            state.roles = content;
        },
        SET_ALBUMS: (state, albums) => {
            const newAlbums = {};
            albums.forEach(function (album) {
                newAlbums[album.id] = album;
            });
            state.albums = Object.assign({}, state.albums, newAlbums);

        }
    },
    actions: {
        GET_PAGES(context) {
            return getJson("/api/Page").then(function (json) {
                    context.commit("SET_PAGES", json);
                });
        },
        GET_MENUS(context) {
            return getJson("/api/Menu").then(function(json) {
                    context.commit("SET_MENUS", json);
                });
        },
        GET_EVENTS(context) {
            return getJson("/api/Event").then(function(json) {
                    context.commit("SET_EVENTS", json);
                });
        },
        GET_ACCOUNT_INFO(context) {
            return getJson("/account/AccountInfo").then(function (json) {
                if (json.loggedin) {
                    context.commit("SET_USERNAME", json.name);
                        context.commit("SET_ROLES", json.roles);
                        context.commit("SET_LOGGEDIN_STATE", true);
                    } else {
                        context.commit("SET_LOGGEDIN_STATE", false);
                    }
                });
        },
        GET_ALBUMS(context, albumIds) {
            const albumKeys = Object.keys(this.getters.albums);
            const neededIds = albumIds.filter(x => albumKeys.indexOf(x) < 0);
            if (neededIds.length < 1) {
                return false;
            }
            return postObject(neededIds, "/api/Album").then(function (json) {
                if (json) {
                    context.commit("SET_ALBUMS", json);
                }
            });
        }
    },
    getters: {
        pages: state => state.pages,
        menus: state => state.menus,
        events: state => state.events,
        loggedin: state => state.loggedin,
        username: state => state.username,
        roles: state => state.roles,
        albums: state => state.albums
    }
});

export default store;
