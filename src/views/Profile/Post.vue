<template>
    <b-card class="mb-3">
        <b-card-text>
            <b-row>
                <b-col sm="10">
                    <div v-if="!isEdit">
                        <h3>{{post.title}}</h3>
                        <p>{{post.content}}</p>
                    </div>
                    <div  v-if="isEdit">
                    <b-form-group>
                        <b-form-input
                            type="text"
                            v-model="title"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-textarea
                            v-model="content"
                            style="resize: none"
                        ></b-form-textarea>
                    </b-form-group>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-secondary mr-2" @click="closeEdit">Cancel</button>
                        <button class="btn btn-success" @click="onEdit">Save</button>
                    </div>
                    </div>
                </b-col>
                <b-col sm="2">
                    <div class="d-flex flex-column align-items-end">
                        <button class="btn btn-warning btn-block" @click="openEdit">Edit</button>
                        <button class="btn btn-danger btn-block mt-2" @click="onDelete" v-if="isEdit">Delete</button>
                        <p class="text-center mt-2 mb-0 pb-0">Last Edited<br/>{{formattedDate}}</p>
                    </div>
                </b-col>
            </b-row>
        </b-card-text>
    </b-card>
</template>

<script>
import Moment from "moment";
import { edit_post, delete_post } from "@/storage/actions";
export default {
    props: ["post", "getPosts"],
    data: () => ({
        title: "",
        content: "",
        isEdit: false,
    }),
    computed: {
        formattedDate() {
            const { lastEditedTime } = this.post;
            return Moment(lastEditedTime, "YYYY-MM-DD HH-mm-ss").format("DD MMM YYYY HH:mm")
        }
    },
    methods: {
        openEdit() {
            this.isEdit = true;
        },
        closeEdit() {
            this.isEdit = false;
        },
        onEdit() {
            const result = edit_post(this.post.id, this.title, this.content);
            this.post.lastEditedTime = result.lastEditedTime;
            this.closeEdit();
        },
        onDelete() {
            const result = delete_post(this.post.id);
            this.closeEdit();
            this.getPosts();
        }
    },
    created() {
        this.title = this.post.title;
        this.content = this.post.content;
    }
};
</script>

<style></style>
