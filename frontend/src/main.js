import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
//import VueRouter from "vue-router";

//Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
