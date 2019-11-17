<template>
    <div class="mt-1">
        <app-post  v-for="(post, index) in posts" :key="index" :post="post" class="mt-3" />
    </div>
</template>

<script>
import Post from "../Post.vue";
export default {
    components: {
        "app-post": Post
    },
    props: ["posts"],
    updated() {
        alert("Update")
    }
}
</script>

<style>

</style>