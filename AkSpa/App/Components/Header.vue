<template>
<header>
    <div class="container">
        <a class="logo" href="/">
            <img src="/images/logo.png" alt="Alte Kamereren &amp; Kamrérbaletten">
        </a>
    </div>
    <nav>
        <router-link class="menu-link" to="/">Page</router-link>
        <router-link class="menu-link" to="/omoss">Om oss</router-link>
        <router-link class="menu-link" to="/safaf">Om er</router-link>
        <router-link class="menu-link" to="/admin">AdminPage</router-link>
    </nav>
</header>
</template>
<script>
    export default {
        //computed: {
        //    menus() {
        //        return this.$store.getters.menus;
        //    }
        //}
    }
</script>
<style lang="scss">
    @import "../Styles/variables.scss";

    header {
        background-color: $akred;
        display: block;
        position: relative;
        border-bottom: 2px solid #1a1a1a;
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
</style>