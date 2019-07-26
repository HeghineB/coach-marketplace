import services from './services'

const actions = {
    getAllCountries: async (context) => {
        context.commit('setCountriesRequest');
        let countries
        try {
            let { data } = await services.getAll()
            countries = data.map(country => ({ id: country.alpha2Code, name: country.name }))
            console.log(countries);
            context.commit('setCountries', countries);
            context.commit('setCountriesSuccess');
        }
        catch (error) {
            context.commit('setCountriesError', error.message);
        }

    },

    addNewCountry: (context, payload) => {
        context.commit('addNewCountryRequest');
        try {
            setTimeout(() => {
                let newCountry = { id: payload, name: payload };
                context.commit("addCountry", newCountry)
                context.commit('addNewCountrySuccess');
            }, 2000)
        }
        catch (error) {
            context.commit('addNewCountryError', error.message);
        }


    },

    deleteCountry: (context, payload) => {
        context.commit('removeCountryRequest');
        try {
            setTimeout(() => {
                let newList = context.state.data.filter(country => !country.id.includes(payload));
                context.commit("removeCountry", newList)
                context.commit('removeCountrySuccess');
            }, 2000)
        }
        catch (error) {
            context.commit('addNewCountryError', error.message);
        }
    },

    clearAll: ({ commit }) => {
        commit("removeAll")
    },

    changeCountry: (context, payload) => {
        context.commit('editCountryRequest');
        try {
            let indexOfChanged = context.state.data.findIndex(country => country.id == payload.id)
            context.state.data[indexOfChanged] = payload
            context.commit('editCountry', context.state.data);
            context.commit('editCountrySuccess');
        }
        catch (error) {
            context.commit('editNewCountryError', error.message);
        }
    }

}


export default actions;
