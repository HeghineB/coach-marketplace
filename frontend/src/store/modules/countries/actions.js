import axios from 'axios';

const actions = {
    getAllCountries: async (context) => {
        let { data } = await axios.get('https://restcountries.eu/rest/v2/all')
        const countries = data.map(country => ({ id: country.alpha2Code, name: country.name }))
        console.log(countries);
        context.commit('setCountries', countries);
    },

    addNewCountry: (context, payload) => {
        let newCountry = { id: payload, name: payload };
        context.commit("addCountry", newCountry)
    },

    deleteCountry: (context, payload) => {
        let newList = context.state.data.filter(country => !country.id.includes(payload));
        context.commit("removeCountry", newList)
    },

    clearAll: ({ commit }) => {
        commit("removeAll")
    }
}


export default actions;
