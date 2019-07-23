const mutations = {
    setCountries: (state, payload) => {
        state.data = [...state.data, ...payload]
    },
    setCountriesRequest: state => {
        state.loading = true
        state.success = false
        state.error = false
    },
    setCountriesSuccess: state => {
        state.loading = false
        state.success = true
        state.error = false
    },
    setCountriesError: (state, errorMessage) => {
        state.loading = false
        state.success = false
        state.error = errorMessage
    },
    addCountry: (state, payload) => {
        state.data = [...state.data, payload];
    },
    addCountryRequest: state => {
        state.actions.addCountry.loading = true
        state.actions.addCountry.success = false
        state.actions.addCountry.error = false
    },
    addCountrySuccess: state => {
        state.actions.addCountry.loading = false
        state.actions.addCountry.success = true
        state.actions.addCountry.error = false
    },
    addCountryError: (state, errorMessage) => {
        state.actions.addCountry.loading = false
        state.actions.addCountry.success = false
        state.actions.addCountry.error = errorMessage
    },
    removeCountry: (state, payload) => {
        state.data = payload;
    },
    removeAll: (state) => { state.data = [] }
}
export default mutations;