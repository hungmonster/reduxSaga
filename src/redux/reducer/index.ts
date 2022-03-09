import { combineReducers } from "redux";
import { numberReducer } from "./number";

export const rootStore = combineReducers({
	numberReducer,
});
