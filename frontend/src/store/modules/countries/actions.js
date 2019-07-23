// import axios from 'axios';

const actions = {
    getAllCountries: async (context) => {
        context.commit('setCountriesRequest');
        try {
            let countries
            setTimeout(() => {
                countries = [
                    { id: "belgium", name: 'Belgium' },
                    { id: "belgium", name: 'Belgium' },
                    { id: "belgium", name: 'Belgium' },
                ]
                console.log(countries);
                context.commit('setCountries', countries);
                context.commit('setCountriesSuccess');
            }, 2000)
            // const countries = data.map(country => ({ id: country.alpha2Code, name: country.name }))
        } catch (error) {
            context.commit('setCountriesError', error.message);
        }
    },
    
    addNewCountry: (context, payload) => {
        context.commit("addCountryRequest")
        let newCountry = { id: payload, name: payload };
        
        setTimeout(() => {
            context.commit("addCountry", newCountry)
            context.commit("addCountrySuccess")
        }, 2000)
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
