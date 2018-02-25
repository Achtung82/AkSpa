<template>
    <header>
        <div class="container">
            <router-link class="logo" to="/">
                <img src="/images/logo.png" alt="Alte Kamereren &amp; Kamrérbaletten">
            </router-link>
            <a class="account hidden-xs" @click="showModal = true">Logga in</a>
        </div>
        <nav>
            <router-link v-if="menus"
                         v-for="menu in menus"
                         class="menu-link"
                         v-bind:key="menu.url"
                         :to="menu.url">
                {{menu.text}}
            </router-link>
            <router-link v-if="menus"
                         class="menu-link"
                         v-bind:key="'/upcomming'"
                         to="/upcomming">
                På gång
            </router-link>
        </nav>
        <login-modal :show="showModal" @close="showModal = false"></login-modal>
    </header>
</template>
<script>
    import LoginModal from './LoginModal.vue';

    export default {
        components: {
            LoginModal
        },
        computed: {
            menus: function () {
                return this.$store.getters.menus;
            }
        },
        data: function () {
            return {
                showModal: false
            }
        }
    }
</script>
<style lang="scss">
    @import "../Styles/variables.scss";

    header {
        background-color: $akred;
        display: block;
        position: relative;
        border-bottom: 2px solid $akgrey;
        font-weight: 400;
        padding: 15px 0 0;
    }
    header nav {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        margin-top: 15px;
        padding: 0.4em;
        flex-flow: row wrap;
        background: $akgrey;
    }
    header .container{
        padding: 0 45px;
    }
    .logo {
        display: block;
    }
    nav .menu-link {
        color: $akwhite;
        padding: 0 20px;
    }
    nav .menu-link.router-link-exact-active {
        color: $akmenulinkgrey;
    }
    .account {
        color: $akblack;
        position: absolute;
        top: 0;
        right: 15px;
        cursor: pointer;
        font-weight: 500;
    }
</style>