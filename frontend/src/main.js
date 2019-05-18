import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);
Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: "md"
});

Vue.use(Vuetify, {
  iconfont: "mdi"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
