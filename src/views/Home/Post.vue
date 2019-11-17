<template>
    <b-card>
        <b-card-text>
            <b-row>
                <b-col sm="2">
                    <div class="d-flex flex-column align-items-center">
                        <img src="https://www.thedayspring.com.pk/wp-content/uploads/2019/01/no-image-available.jpg" height="50" width="50" class="rounded"/>
                        <p class="text-center m-0 p-0">{{post.user.fullname}}</p>
                    </div>
                    
                </b-col>
                <b-col sm="7">
                    <h6>{{post.title}}</h6>
                    <p class="font-weight-bold">{{post.content}}</p>
                </b-col>
                <b-col sm="3">
                    <div class="d-flex flex-column justify-content-end">
                        <h6 class="m-0 t-0"><timeago :datetime="postTime"></timeago></h6>
                    </div>
                </b-col>
            </b-row>
        </b-card-text>
    </b-card>
</template>

<script>
import Moment from "moment";
export default {
    props: ["post"],
    computed: {
        postTime() {
            const date = Moment(this.post.createdTime, "YYYY-MM-DD HH-mm-ss").valueOf();
            return date;
        }
    }
}
</script>

<style>

</style>