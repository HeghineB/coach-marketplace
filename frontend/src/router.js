import Vue from "vue"
import Router from "vue-router"
import Landing from "./views/Landing"
import SearchCoach from "./views/SearchCoach"


Vue.use(Router)

export default new Router({

    routes: [
        {
            path: "/",
            name: "landing",
            component: Landing
        }, {
            path: "/search",
            name: "search",
            component: SearchCoach
        }

    ],
    mode: "history"
})
