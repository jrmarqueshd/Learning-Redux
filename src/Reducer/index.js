import { combineReducers } from "redux";

import todos from "./TodoReducer";
import visibilityFilter from "./visibilityFiltersReducer";

export default combineReducers({
	todos,
	visibilityFilter,
});
