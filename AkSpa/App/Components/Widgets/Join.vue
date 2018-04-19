<template>
    <div class="join">
        <div class="video-bg">
            <div class="video-bg-content">
                <h1>Vill du spela eller dansa med oss?</h1>
            </div>
            <video autoplay muted loop class="video">
                <source src="/videos/akslowmo.mp4" type="video/mp4">
            </video>
        </div>
        <div class="join-body">
            <div class="text" v-html="text">
            </div>
            <form class="form" v-on:submit.prevent="onSubmit" ref="joinform">
                <div class="form-group">
                    <label for="FirstName">Förnamn</label>
                    <input type="text" class="form-control" placeholder="Förnamn" name="FirstName">
                </div>
                <div class="form-group">
                    <label for="LastName">Efternamn</label>
                    <input type="text" class="form-control" placeholder="Efternamn" name="LastName">
                </div>
                <div class="form-group">
                    <label for="Email">Epost</label>
                    <input type="text" class="form-control" placeholder="Epost" name="Email">
                </div>
                <div class="form-group">
                    <label for="Phone">Telefonnummer</label>
                    <input type="text" class="form-control" placeholder="Telefonnummer" name="Phone">
                </div>
                <div class="form-group">
                    <label for="Phone">Telefonnummer</label>
                    <select class="form-control" name="Instrument" required="">
                        <option value="">Välj instrument</option>
                        <option>Altsax</option>
                        <option>Balett</option>
                        <option>Banjo</option>
                        <option>Barytonsax</option>
                        <option>Euphonium</option>
                        <option>Flöjt</option>
                        <option>Horn</option>
                        <option>Klarinett</option>
                        <option>Oboe</option>
                        <option>Slagverk</option>
                        <option>Tenorsax</option>
                        <option>Trombon</option>
                    </select>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn ak-btn">Gå med!</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import getFormData from "../../Utils/getFormData";

    export default {
        props: ['text'],
        methods: {
            onSubmit: function () {
                const form = this.$refs.joinform;
                const data = getFormData(form);
                return fetch("/api/join", {
                    body: data,
                    method: "post",
                    credentials: "same-origin",
                    headers: new Headers({
                        "Content-Type": "application/json; charset=utf-8"
                    })
                })
                    .then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        if (json.success) {
                            form.reset();
                        } else {
                            console.log(json.message);
                        }
                    });
            }
        }
    }
</script>
<style lang="scss">
    .join-body{
        margin-left: -15px;
        margin-right: -15px;
        display: flex;
    }
    .join-body .text, .join-body .form {
        width: 50%;
        padding: 0 15px;
        margin: 0;
        flex-grow: 1;
    }
    @media screen and (max-width: 767px) {
        .join-body {
            display: block;
        }
        .join-body .text, .join-body .form {
            width: 100%;
        }
    }
</style>