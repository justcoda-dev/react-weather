import ACTION_TYPES from "../actionType"

const searchCities = (state = [], {type, payload}) => {
    switch (type) {
        case ACTION_TYPES.SEARCHED_CITIES:
            return [...payload]
        case ACTION_TYPES.CLEAR_SEARCHED_CITIES:
            return []
        default:
            return state
    }
}

export default searchCities;