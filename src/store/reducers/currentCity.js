import ACTION_TYPE from "../actionType";

const currentCityReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ACTION_TYPE.CURRENT_CITY:
            return {...payload}
        default:
            return state
    }

}
export default currentCityReducer;