<template>
    <div class="w-50 mx-auto mt-3">
        <div class="card">
            <div class="card-body">
                <div
                    class="d-flex align-items-center"
                    style="flex-direction: column"
                >
                    <div class="w-50">
                        <img
                            src="../assets/images/logo.png"
                            alt=""
                            class="img-fluid"
                        />
                    </div>
                    <p class="mt-2 text-muted">
                        You can login AwesomePosts on this page
                    </p>
                </div>
                <div class="w-100 d-flex flex-column align-items-center">
                    <b-alert variant="danger w-50" :show="error">Email or password is wrong</b-alert>
                    <form class="w-50" @submit="handleSumbit">
                        <div class="form-group">
                            <label for="exampleInputUsername">Username</label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputUsername"
                                placeholder="Enter username"
                                v-model="username"
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                v-model="password"
                            />
                        </div>
                        <button type="submit" class="btn btn-block btn-primary">
                            Sign In
                        </button>
                    </form>
                    <p class="mt-3">
                        Don't have an account?
                        <router-link tag="a" to="/register"
                            >Sign Up</router-link
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from "lodash";
import { mapGetters, mapActions } from "vuex";
import { store_login } from "@/storage/actions";

export default {
    data: () => ({
        username: "",
        password: "",
        error: false
    }),
    methods: {
        ...mapActions(["setUser"]),
        handleSumbit(e) {
            e.preventDefault();
            const result = store_login(this.username, this.password);
            if (result.status) {
				this.setUser(result.userInfo);
				this.$router.go("/");
            } else {
                this.error = true;
            }
        }
    },
    computed: mapGetters({
        isLogged: "getIsLogged"
    }),
    created() {
        console.log("a");
        if (this.isLogged) {
            this.$router.push("/");
        }
    },
    watch: {
        "$store.state.user": function(val) {
            if(!_.isEmpty(val)) {
			}
        }
    }
};
</script>

<style lang="scss"></style>
