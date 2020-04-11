import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import * as fb from "./firebaseConfig";

Vue.config.productionTip = false;

//handle page reloads
let app: any;
fb.auth.onAuthStateChanged((user: any) => {
  console.log('user from auth state changed', user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).;
