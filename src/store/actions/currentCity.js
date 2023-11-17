import ACTION_TYPE from "../actionType";
import {GET} from "../../requests/api"

const currentCity = (payload) => {
    return {
        type: ACTION_TYPE.CURRENT_CITY,
        payload
    }
}

// async
export const getCurrentCity = (city) => async (dispatch) => {
    try {
        const response = await GET.CURRENT.CITY(city);
        dispatch(currentCity(response))
    } catch (e) {
        console.log(e)

        setTimeout(() => {
            dispatch(getCurrentCity(city))
        }, 1000)
    } finally {
    }
}