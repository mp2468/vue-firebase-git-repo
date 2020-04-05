import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
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
    component: Home
  },
  {
    path: "/customs",
    name: "Customs",
    component: Home
  },
  {
    path: "/reserve",
    name: "Reserve",
    component: Home
  },
  {
    path: "/interchange",
    name: "Interchange",
    component: Home
  },
  {
    path: "/labs",
    name: "Labs",
    component: Home
  },
  {
    path: "/shoreline",
    name: "Shoreline",
    component: Home
  },
  {
    path: "/factory",
    name: "Factory",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
