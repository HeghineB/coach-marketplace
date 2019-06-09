import Vue from "vue";
import Router from "vue-router";

import LoginBody from '../views/login-body/LoginBody'
import Index from "../views/index/Index";

const routes = [
  // { path: "/", redirect: "/home" },
  { path: "/", name: "ha", component: LoginBody },
  { path: "/home", name: "home", component: Index }

  // { path: '*', redirect: '/404' }
];

Vue.use(Router);

export default new Router({
  mode: "history",
  routes
});
