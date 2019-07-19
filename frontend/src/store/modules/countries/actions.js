import axios from 'axios';

const actions = {
    getAllCountries({ commit }) {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(r => r.data)
            .then(countries => {
                console.log(countries)
            })
    }
}

export default actions;
