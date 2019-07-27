import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import routes from "./router/index";

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  routes
}).$mount("#app");
