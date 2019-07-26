const mutations = {
    // Get countries
    set_countries: (state, countries) => {
        const oldState = { ...state.list }
        countries.forEach(country => { // { id: "fghjk", name="BVeilf" }
            oldState[country.id] = country
        })
        state.list = { ...oldState }

    },
    setCountriesRequest: (state) => {
        state.isLoading = true,
            state.isSuccess = false,
            state.isError = false
    },
    setCountriesSuccess: (state) => {
        state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.generatedList = true
    },
    setCountriesError: (state, error) => {
        state.isLoading = false,
            state.isSuccess = false,
            state.isError = error.message
    },
    // Add countries
    addCountry: (state, payload) => {
        state.data = [...state.data, payload];
    },
    addNewCountryRequest: (state) => {
        state.isLoading = true,
            state.isSuccess = false,
            state.isError = false
    },
    addNewCountrySuccess: (state) => {
        state.isLoading = false,
            state.isSuccess = true,
            state.isError = false
    },
    addNewCountryError: (state, error) => {
        state.isLoading = false,
            state.isSuccess = false,
            state.isError = error.message
    },
    //Remove one country
    removeCountry: (state, payload) => {
        state.data = payload;
    },
    removeCountryRequest: (state) => {
        state.isLoading = true,
            state.isSuccess = false,
            state.isError = false
    },
    removeCountrySuccess: (state) => {
        state.isLoading = false,
            state.isSuccess = true,
            state.isError = false
    },
    removeCountryError: (state, error) => {
        state.isLoading = false,
            state.isSuccess = false,
            state.isError = error.message
    },
    //Remove all countries
    removeAll: (state) => {
        state.data = [],
            state.generatedList = false
    },
    //Edit country
    editCountry: (state, payload) => {
        state.data = payload;
    },
    editCountryRequest: (state) => {
        state.isLoading = true,
            state.isSuccess = false,
            state.isError = false
    },
    editCountrySuccess: (state) => {
        state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.generatedList = true
    },
    editCountryError: (state, error) => {
        state.isLoading = false,
            state.isSuccess = false,
            state.isError = error.message
    }
}



export default mutations;