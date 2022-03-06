import { combineReducers } from "redux";
import data from "./data";
import result from "./result";

const rootReducer = combineReducers({ data, result })

export default rootReducer;
