const getters = {
    countries: state => Object.values(state.list),

    countryById: state => {
        return function(id) {
            return state.list[id]
        }
    }
};


export default getters;