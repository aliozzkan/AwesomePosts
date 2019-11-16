<template>
    <div>
        <h1>Profile</h1>
        <p>FullName: {{user.fullname}}</p>
        <p>Username: {{user.username}}</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data: () => ({

    }),
    computed: mapGetters({
        user: "getUser"
    })
}
</script>

<style>

</style>