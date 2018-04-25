<template>
    <div class="menu-item">
        <router-link v-if="menu.url"
                     class="menu-link"
                     v-bind:class="{ selected: selected }"
                     v-bind:key="menu.url"
                     :to="menu.url">
            {{menu.text}}
        </router-link>
        <div v-if="!menu.url"
             v-bind:class="{ selected: selected }"
             class="menu-link no-link">
            {{menu.text}}
        </div>
        <ul class="subnav">
            <li v-for="submenu in menu.children">
                <router-link v-if="submenu.url"
                             class="menu-link"
                             v-bind:key="submenu.url"
                             :to="submenu.url">
                    {{submenu.text}}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: ['menu'],
        computed: {
            selected: function () {
                if (!this.menu.children) {
                    return false;
                }
                const currentPath = this.$route.path.toLowerCase();
                for (let i = 0; i < this.menu.children.length; i++) {
                    const child = this.menu.children[i];
                    if (child.url.toLowerCase() === currentPath) {
                        return true;
                    }
                }
                return false;
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../Styles/variables.scss";
    .menu-link {
        color: $akwhite;
        padding: 0 20px;
        font-size: 1rem;
    }
    .menu-link.router-link-exact-active,
    .selected{
        color: $akmenulinkgrey;
    }
    .menu-item:hover .subnav{
        display: block;
    }
    .no-link{
        cursor: default;
    }
    .subnav {
        display: none;
        position: absolute;
        z-index: 10;
        list-style: none;
        padding: 15px 0 10px 0;
        background-color: $akgrey;
        white-space: nowrap;
    }
    .subnav li {
        padding: 0.3em 0;
    }
</style>
