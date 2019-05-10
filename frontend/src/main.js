import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import Router from "vue-router";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/dist/vuetify.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import router from './router'


Vue.use(Vuetify);
Vue.use(Router);

Vue.config.productionTip = false;



new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
