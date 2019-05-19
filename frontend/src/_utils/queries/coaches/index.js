import axios from "axios"

/**
 * GetCoaches
 * 
 * This function return you the list of coahces
 * 
 * @return {Array}
 */
const getCoaches = async () => {
    const coaches = [];
    const response = await axios.get("https://my.api.mockaroo.com/coach-mp1.json?key=19f08970")
    console.log(response)
    response.data.forEach(item => {
        coaches.push(item)
    })
    return coaches
}

// const addCoaches
// const updateCoache = async id 


export default { getCoaches: getCoaches }