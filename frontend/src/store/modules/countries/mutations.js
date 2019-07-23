const mutations = {
    setCountries: (state, payload) => {
        state.data = [...state.data, ...payload]
    },
    addCountry: (state, payload) => {
        state.data = [...state.data, payload];
    },
    removeCountry: (state, payload) => {
        state.data = payload;
    },
    removeAll: (state) => { state.data = [] }
}
export default mutations;