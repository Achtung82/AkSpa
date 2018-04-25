<template>
    <transition name="modal">
        <div class="modal-mask" v-if="show">
            <div class="modal-wrapper" v-on:click="maskClick">
                <div class="modal-container">
                    <div class="modal-header">
                        <h3>Logga in</h3>
                    </div>
                    <form ref="loginform" v-on:submit.prevent="onSubmit">
                        <div class="modal-body">
                            <alert-field :text="errorMessage" :error="true" :show="errorMessage">
                            </alert-field>
                            <div class="form-group">
                                <label for="login-username">Användarnamn</label>
                                <input type="text"
                                       name="Username"
                                       class="form-control"
                                       placeholder="Användarnamn"
                                       id="login-username"
                                       autocomplete="username" />
                            </div>
                            <div class="form-group">
                                <label for="login-password">Lösenord</label>
                                <input type="password"
                                       name="Password"
                                       placeholder="Lösenord"
                                       class="form-control"
                                       id="login-password"
                                       autocomplete="password" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <slot name="footer">
                                <a class="btn ak-btn" @click="$emit('close')">
                                    Stäng
                                </a>
                                <button class="btn ak-btn" type="submit">
                                    Logga in
                                </button>
                            </slot>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import AlertField from "../AlertField";
    import postForm from "../../Utils/apiservices";

    export default {
        props: ['show'],
        components: {
            AlertField
        },
        methods: {
            onSubmit: function () {
                const self = this;
                const form = this.$refs.loginform;

                postForm(form, "/account/login").then(function (json) {
                    if (json.success) {
                        self.errorMessage = "";
                        form.reset();
                        self.$emit("close");
                        self.$store.dispatch("GET_ACCOUNT_INFO");
                        self.$store.dispatch("GET_PAGES").then(function () {
                            self.$router.push("/upcoming");
                        });
                        self.$store.dispatch("GET_MENUS");
                    } else {
                        self.errorMessage = json.message;
                    }
                });
            },
            maskClick(event) {
                if (event.target.classList.contains("modal-wrapper")) {
                    this.$emit("close");
                }
            }
        },
        data: function () {
            return {
                errorMessage: ""
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../Styles/variables.scss";
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: baseline;
    }

    .modal-header {
        padding: 15px;
        border-bottom: 1px solid $grey-separator;
    }

    .modal-body {
        padding: 15px;
    }

    .modal-footer {
        padding: 15px;
        text-align: right;
        border-top: 1px solid $grey-separator;
    }

    .modal-container {
        width: 600px;
        margin: 30px auto;
        background-color: $akwhite;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }

    .modal-header h3 {
        margin: 0;
        text-transform: none;
        color: $akblack;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        transform: translateY(-30%);
    }
</style>
