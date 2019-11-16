import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const About = () => import('../views/About.vue');
const Login = () => import("../views/Login.vue");

const isLogged = true;


/** 
 * If user is not logged in, it does not access these pages!
 * 
 * 
*/


/**
 * This function returns true, if the value is in Private List!
 */
const isPrivate = (routeName) => {
    const index = privateList.findIndex(_routeName => routeName === _routeName);
    return index !== -1;
}

/**
 * 
 * 
 * Private List =>
 */
const privateList = ["about"];
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const AuthLayout = () => import("../components/Layouts/AuthLayout.vue");

const withLayout = (component) => {
    const originalProps = component.props || [];
    if(isLogged) {
        return Vue.component('withLayout', {
            render(createElement) {
                return createElement(AuthLayout, [
                  createElement(component, {props: {...originalProps}})
                ])
            }
        })
    } else {
        return Vue.component('withLayout', {
            render(createElement) {
                return createElement(component, {
                    props: {...originalProps}
                })
            }
        })
    }
}


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes.map(route => ({...route, component: withLayout(route.component)}))
});

router.beforeEach((to, from, next) => {
  const isPrivateRoute = isPrivate(to.name);

  /**
   * 
   * If the route is private and user is not logged in, go to login page!
   */
  if(isPrivateRoute && !isLogged) {
      next("login");
  } else {
      // Page is public or user is logged in
      next();
  }

  
});

export default router
