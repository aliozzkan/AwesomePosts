<template>
    <b-card>
        <b-card-text>
            <div class="d-flex justify-content-center">
                <img src="https://www.thedayspring.com.pk/wp-content/uploads/2019/01/no-image-available.jpg" height="50" width="50" class="rounded" alt="">
            </div>
            <div class="text-center mt-1">
                <h5 class="mb-0">{{user.fullname}}</h5>
                <p class="text-muted m-0 p-0 text-center">@{{user.username}}</p>
            </div>
            <b-row class="mt-3">
               
            </b-row>
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    props: ["user"]
}
</script>

<style lang="scss">
</style>