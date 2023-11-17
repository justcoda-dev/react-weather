import ACTION_TYPE from "../actionType";
import {GET} from "../../requests/api";

const forecastCityByDays = (payload) => {
    return {
        type: ACTION_TYPE.FORECAST_CITY_BY_DAYS,
        payload
    }
}
// async
export const getForecastCityByDays = (city, days) => async (dispatch) => {
    try {
        const response = await GET.FORECAST.CITY_BY_DAYS(city, days);
        dispatch(forecastCityByDays(response))
    } catch (e) {
        console.error(e)
        dispatch(forecastCityByDays({e}))
    } finally {
    }
}