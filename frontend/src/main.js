import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);
Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: "md"
});

Vue.use(Vuetify, {
  iconfont: "mdi"
});

Vue.use(Vuetify, {
  iconfont: "fa"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
