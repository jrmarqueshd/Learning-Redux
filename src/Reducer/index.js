import { combineReducers } from "redux";

import todos from "./todoReducer";
import visibilityFilter from "./visibilityFiltersReducer";

export default combineReducers({
	todos,
	visibilityFilter,
});
