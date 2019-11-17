<template>
    <b-row class="mt-3">
        <b-col sm="3">
            <img src="https://www.thedayspring.com.pk/wp-content/uploads/2019/01/no-image-available.jpg" class="img-fluid rounded w-100" alt="">
            <h3 class="text-center mt-3">{{user.fullname}}</h3>
            <h5 class="text-muted text-center">@{{user.username}}</h5>
        </b-col>
        <b-col sm="9">
            <div v-for="(post, i) in posts" :key="i">
                <app-post :post="post" :getPosts="getPosts"></app-post>
            </div>
        </b-col>
    </b-row>
</template>

<script>
import { mapGetters } from "vuex";
import { get_posts_by_user } from "@/storage/actions";
import Post from "./Post";

export default {
    data: () => ({
        posts: []
    }),
    computed: mapGetters({
        user: "getUser",
    }),
    components: {
        "app-post": Post
    },
    methods: {
        getPosts() {
            const posts = get_posts_by_user(this.user.id);
            this.posts = posts;
        }
    },
    mounted() {
        this.getPosts()
    }
}
</script>

<style>

</style>