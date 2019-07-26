import Vue from 'vue';
import Vuex from 'vuex';
import countries from './modules/countries';
import createLogger from '../../node_modules/vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createLogger()],
    modules: { countries }
})