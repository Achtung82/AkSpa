<template>
    <transition name="modal">
        <div class="modal-mask" v-if="show">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <h3>Logga in</h3>
                    </div>
                    <form ref="loginform" v-on:submit.prevent="onSubmit">
                        <div class="modal-body">
                            <input type="text" name="Username" placeholder="Användarnamn" />
                        </div>
                        <div class="modal-body">
                            <input type="password" name="Password" placeholder="Lösenord" />
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
    import "whatwg-fetch";
    import getFormData from "../Utils/getFormData";

    export default {
        props: ['show'],
        methods: {
            onSubmit: function () {
                const form = this.$refs.loginform;
                const data = getFormData(form);

                return fetch("/account/login", {
                    body: JSON.stringify({Username: "ludvig", Password: "givdul1982"}),
                    method: "post",
                    credentials: "same-origin",
                    headers: new Headers({
                        "Content-Type": "application/json; charset=utf-8"
                    })
                })
                .then(function (response) {
                    return response.json();
                }).then(function (json) {
                    console.log(json);
                    if (json.success) {
                        form.reset();
                    }
                });
            }
        },
    }
</script>
<style lang="scss">
    @import "../Styles/variables.scss";
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
        vertical-align: middle;
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
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin: 0;
        text-transform: none;
        color: $akblack;
    }
</style>
