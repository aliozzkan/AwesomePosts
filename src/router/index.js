import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/";

Vue.use(VueRouter);

const About = () => import("../views/About.vue");
const Profile = () => import("../views/Profile.vue");

const Login = () => import("../views/Login.vue");
const Register = () => import("../views/Register.vue");

const isLogged = store.getters.getIsLogged;
/**
 *
 *
 * Private List =>
 */
const privateList = ["home", "about", "profile"];
const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/login",
        name: "login",
        component: Login
	},
	{
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile
    }
];

/**
 * If user is not logged in, it does not access these pages!
 *
 *
 *
 * This function returns true, if the value is in PrivateList!
 */
const isPrivate = routeName => {
    const index = privateList.findIndex(_routeName => routeName === _routeName);
    return index !== -1;
};

const AuthLayout = () => import("../components/Layouts/AuthLayout.vue");

const withLayout = component => {
    const originalProps = component.props || [];
    if (isLogged) {
        return Vue.component("withLayout", {
            render(createElement) {
                return createElement(AuthLayout, [
                    createElement(component, { props: { ...originalProps } })
                ]);
            }
        });
    } else {
        return Vue.component("withLayout", {
            render(createElement) {
                return createElement(component, {
                    props: { ...originalProps }
                });
            }
        });
    }
};

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: routes.map(route => ({
        ...route,
        component: withLayout(route.component)
    }))
});

router.beforeEach((to, from, next) => {
    const isPrivateRoute = isPrivate(to.name);

    /**
     *
     * If the route is private and user is not logged in, go to login page!
     */
    if (isPrivateRoute && !isLogged) {
        next("login");
    } else {
        // Page is public or user is logged in
        next();
    }
});

export default router;
