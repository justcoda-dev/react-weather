import ACTION_TYPES from "../actionType"

const forecastCityByDays = (state = {}, {type, payload}) => {
    switch (type) {
        case ACTION_TYPES.FORECAST_CITY_BY_DAYS:
            return {...payload}
        default:
            return state
    }
}
export default forecastCityByDays;