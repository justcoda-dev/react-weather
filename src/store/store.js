import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import {counterMiddleVar} from "./middleVars/counterMiddleVar";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;