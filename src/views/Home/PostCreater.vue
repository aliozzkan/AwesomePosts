<template>
    <b-card>
        <b-card-text>
            <b-form @submit="handleSubmit" @reset="handleReset">
                <div class="d-flex justify-content-between">
                    <div class="w-100">
                        <b-form-group>
                            <b-form-input
                                type="text"
                                placeholder="Post Title"
                                v-model="title"
                            />
                        </b-form-group>
                        <b-form-group class="m-0">
                            <b-form-textarea
                                id="textarea"
                                placeholder="Enter something..."
                                rows="3"
                                style="resize: none"
                                max="200"
                                v-model="content"
                            ></b-form-textarea>
                        </b-form-group>
                        <div class="d-flex justify-content-end mt-2">
                            <button class="btn w-25 ml-3 btn-primary">Share</button>
                        </div>
                    </div>
                </div>
            </b-form>
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    data: () => ({
        title: "",
        content: ""
    }),
    props: ["addPost"],
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.addPost(this.title, this.content);
            this.handleReset();
        },
        handleReset(e) {
            this.title = "";
            this.content = "";
        }
    }
};
</script>

<style></style>
