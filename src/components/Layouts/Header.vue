<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand m-0 p-0" href="#">
            <img src="../../assets/images/logo.png" height="30" alt="">
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" tag="a" to="/">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" tag="a" to="/profile">Trend Topics</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" tag="a" to="/profile">Profile</router-link>
                </li>
                <li class="nav-item d-flex align-items-center">
                    <app-user-menu :user="user"></app-user-menu>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import UserMenu from "./UserMenu";
export default {
    props: ["user"],
    components: {
        "app-user-menu": UserMenu
    }
};
</script>

<style></style>
