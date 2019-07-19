import axios from 'axios';

const actions = {
    async getAllCountries({ commit }) {
        await axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(res => commit('setCountries', res.data)
            )
    }
}

export default actions;
