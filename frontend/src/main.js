import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import Vuetify from "vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

// Use Vuetify
import "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: "mdi"
});

Vue.use(Vuetify, {
  iconfont: "md"
});

Vue.use(Vuetify, {
  iconfont: "fa"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
