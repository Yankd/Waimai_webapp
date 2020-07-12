import tabReducer from './tabReducer.js';
import categoryReducer from './categoryReducer.js'
import {combineReducers} from "redux";
import contentListReducer from "./categoryReducer.js";

const reducers = combineReducers({
    tabReducer,
    categoryReducer,
    contentListReducer
})

export default reducers;