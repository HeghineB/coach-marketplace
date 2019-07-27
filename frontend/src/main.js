import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import routes from "./router/index";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
