<template>
    <div>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/profile">Profile</router-link> | 
          <button class="btn btn-danger btn-sm" @click="onLogout">Logout</button>
        </div>
        <slot/>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	methods: {
		...mapActions(["logout"]),
		onLogout() {
			this.logout();
			this.$router.go("/login");
		}
	},
}
</script>

<style>

</style>