import ACTION_TYPE from "../actionType";
import {GET} from "../../requests/api";

const searchedCities = (payload) => {
    return {
        type: ACTION_TYPE.SEARCHED_CITIES,
        payload
    }
}
// async
export const getSearchedCities = (letters) => async (dispatch) => {
    const citiesByLetters = await GET.SEARCH.CITY_BY_LETTERS(letters)
    console.log(citiesByLetters)
    dispatch(searchedCities(citiesByLetters))
}