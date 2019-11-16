<template>
    <div>
        <div id="nav">
          <app-header :user="user"></app-header>
        </div>
        <div class="container">
          <slot/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "./Header.vue";

export default {
  computed: mapGetters({
    user: "getUser"
  }),
	methods: {
		...mapActions(["logout"]),
		onLogout() {
			this.logout();
			this.$router.go("/login");
		}
  },
  components: {
    "app-header": Header
  }
}
</script>

<style>

</style>