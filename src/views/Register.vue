<template>
    <div class="w-50 mx-auto mt-3">
        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-center" style="flex-direction: column">
                    <div class="w-75">
                        <img src="../assets/images/logo.png" alt="" class="img-fluid">
                    </div>
                    <p class="mt-2 text-muted">You can register AwesomePosts on this page</p>
                </div>
                <div class="w-100 d-flex flex-column align-items-center" > 
                    <form class="w-50" @submit="handleSumbit">
                    <div class="form-group">
                        <label for="exampleInputUsername">Username</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="username"
                            id="exampleInputUsername"
                            placeholder="Enter username"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputFullname">Fullname</label>
                        <input
                            type="text"
                            v-model="fullname"
                            class="form-control"
                            id="exampleInputFullname"
                            placeholder="Enter fullname"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            v-model="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" class="btn btn-block btn-primary">
                        Sign Up
                    </button>
                </form>
                <p class="mt-3">
                    Already have an account?
                    <router-link tag="a" to="/login">Sign In</router-link>
                </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store_register } from "@/storage/actions";
export default {
    data() {
        return {
            username: "",
            fullname: "",
            password: ""
        }
    },
    methods: {
        handleSumbit(e) {
            e.preventDefault();
            const user = store_register(this.username, this.fullname, this.password);
            console.log(user);
        },

    }
};
</script>

<style lang="scss">
</style>
