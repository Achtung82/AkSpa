<template>
<header>
    <div class="container">
        Meny
    </div>
    <nav>
        <a v-for="menu in menus"
           class="menu-link" 
           href="">
            {{menu}}
        </a>
    </nav>
</header>
</template>
<script>
    import 'whatwg-fetch';
    export default {
        data: function () {
            return {
                menus: null
            }
        },
        created() {
            var self = this;
            fetch('/Menu/GetAll')
                .then(function (response) {
                    return response.json();
                }).then(function (json) {
                    self.menus = json;
                });
        }
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
        background: $akgrey;
    }
    nav .menu-link {
        color: $akwhite;
    }
</style>