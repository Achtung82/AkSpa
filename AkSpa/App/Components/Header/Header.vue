<template>
    <header>
        <div class="container">
            <router-link class="logo" :to="logolink">
                <img src="/images/logo.png" alt="Alte Kamereren &amp; Kamrérbaletten">
            </router-link>
            <a class="account hidden-xs" v-if="!loggedin" @click="showModal = true">Logga in</a>
            <a href="/account/logout" class="account hidden-xs" v-if="loggedin">Logga ut</a>
        </div>
        <nav>
            <template v-if="menus" v-for="menu in menus">
                <menu-item :menu="menu"></menu-item>
            </template>
            <template v-if="menus" v-for="menu in extramenus">
                <menu-item :menu="menu"></menu-item>
            </template>
        </nav>
        <login-modal :show="showModal" @close="showModal = false"></login-modal>
    </header>
</template>
<script>
    import LoginModal from './LoginModal.vue';
    import MenuItem from './MenuItem.vue';

    export default {
        components: {
            LoginModal,
            MenuItem
        },
        computed: {
            menus: function () {
                return this.$store.getters.menus;
            },
            loggedin: function () {
                return this.$store.getters.loggedin;
            },
            logolink: function () {
                if (!this.$store.getters.loggedin) {
                    return "/";
                } 
                return "/upcoming";
            },
            isAdmin: function () {
                const roles = this.$store.getters.roles;
                return roles && (roles.indexOf("Admin") || roles.indexOf("SuperNintendo"));
            },
            isnintendo: function () {
                const roles = this.$store.getters.roles;
                return roles && roles.indexOf("SuperNintendo");
            },
            extramenus: function () {
                let menus = [];
                menus.push({ url: "/upcoming", text: "På gång" });
                if (this.isAdmin) {
                    menus.push({ text: "Admin" });
                }
                return menus;
            }
        },
        data: function () {
            return {
                showModal: false
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../Styles/variables.scss";

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
    .account {
        color: $akblack;
        position: absolute;
        top: 0;
        right: 15px;
        cursor: pointer;
        font-weight: 500;
    }
</style>