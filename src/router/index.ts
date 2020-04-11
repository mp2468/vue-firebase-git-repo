import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import firebase from "firebase";

//views
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
// import Settings from "@/views/Settings"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "*",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/woods",
    name: "Woods",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/customs",
    name: "Customs",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/reserve",
    name: "Reserve",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/interchange",
    name: "Interchange",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/labs",
    name: "Labs",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/shoreline",
    name: "Shoreline",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/factory",
    name: "Factory",
    component: Home,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log('route beforeEach: ', to, from, next);
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next("/login");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
