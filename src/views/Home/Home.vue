<template>
    <div>
        <b-row class="mt-4">
            <b-col sm="3">
                <app-user :user="user" />
            </b-col>
            <b-col sm="9">
                <b-card
                    v-if="isChange"
                    @click="scrollUp"
                    style="cursor: pointer"
                >
                    <b-card-text>
                        <h5 class="text-center m-0 p-0">+ ADD POST</h5>
                    </b-card-text>
                </b-card>
                <app-post-creater :user="user" :addPost="addPost" />
                <div class="mt-1">
                    <transition-group name="slide">
                        <div
                            v-for="(post, index) in posts"
                            :key="index"
                            class="mt-3"
                        >
                            <app-post :post="post" />
                        </div>
                    </transition-group>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import User from "./User.vue";
import PostCreater from "./PostCreater.vue";
import { get_all_posts, store_add_post } from "@/storage/actions";
import Post from "./Post.vue";
import Vue from "vue";

export default {
    name: "home",
    components: {
        "app-user": User,
        "app-post-creater": PostCreater,
        "app-post": Post,
    },
    computed: mapGetters({
        user: "getUser"
    }),
    data: () => ({
        isChange: false,
        posts: [],
    }),
    methods: {
        getPosts() {
            this.posts = get_all_posts().map(post => ({ ...post }));
        },
        addPost(title, content) {
            const response = store_add_post(this.user.id, title, content);
            this.getPosts();
        }
    },
    created() {
        this.getPosts();
    }
};
</script>

<style lang="scss">
.scrollarea {
    position: relative;
    margin: auto;
    height: calc(100vh - 40px - 3em);
}

</style>
