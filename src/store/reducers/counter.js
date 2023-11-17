const counter = (state = 0, {type, payload}) => {
    switch (type) {
        case "ADD":
            console.log(state + payload)
            return state + payload
        case "REMOVE":
            return state
        default:
            return state
    }
}
export default counter;