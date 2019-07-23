import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'

import countries from './modules/countries';

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [
        createLogger()
    ],
    modules: { countries }
})