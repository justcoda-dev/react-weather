import {combineReducers} from "redux";
import currentCity from "./reducers/currentCity";
import forecastCityByDays from "./reducers/forecastCityByDays";
import searchCities from "./reducers/searchCities";
import counter from "./reducers/counter";
const rootReducer = combineReducers({
    counter,
    currentCity,
    forecastCityByDays,
    searchCities
})
export default rootReducer;