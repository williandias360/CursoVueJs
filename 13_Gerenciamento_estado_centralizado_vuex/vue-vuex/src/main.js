import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import BootStrap from "bootstrap-vue/dist/bootstrap-vue.esm";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootStrap);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
