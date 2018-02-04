import vue from "vue";
import vuex from "vuex";
import "whatwg-fetch";

vue.use(vuex);

const store = new vuex.Store({
    strict: true,
    state: {
        menus: null
    },
    mutations: {
        SET_MENUS: (state, menus) => {
            state.menus = menus;
        }
    },
    actions: {
        GET_MENUS(context) {
            fetch('/Menu/GetAll')
                .then(function (response) {
                    return response.json();
                }).then(function (json) {
                    context.commit("SET_MENUS", json);
                });
        }
    },
    getters: {
        menus: state => state.menus
    }
});

export default store;
