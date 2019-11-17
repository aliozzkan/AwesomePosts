<template>
    <div class="user_menu ml-3" v-click-outside="onClickOutside">
        <div class="d-flex align-items-center" style="cursor: pointer" @click="onToggle">
            <div>
                <img src="https://www.thedayspring.com.pk/wp-content/uploads/2019/01/no-image-available.jpg" class="border border-primary rounded-circle mr-1" height="35" width="auto" alt="">
            </div>
            <div>
                {{user.fullname}}
            </div>
        </div>
        <div class="menu bg-primary border-primary" v-if="isShow">
            <ul>
                <li><button class="btn btn-sm btn-danger" @click="onLogout">Logout</button></li>
            </ul>
        </div>
        
        
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data: () => ({
        isShow: false
    }),
    props: ["user"],
    methods: {
        ...mapActions(["logout"]),
		onLogout() {
			this.logout();
			this.$router.go("/login");
		},
        onClickOutside() {
            if(this.isShow) {
                this.isShow = false;
            }
        },
        onToggle() {
            this.isShow = !this.isShow;
        }
    }
}
</script>

<style lang="scss">
    .user_menu {
        position: relative;
    }
    .menu {
        position: absolute;
        width: 150%;
        top: calc(100% + 15px);
        padding-bottom: 1em;
        right: -15px;
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            li {
                padding: .5em 1em;
            }
        }
    }
</style>