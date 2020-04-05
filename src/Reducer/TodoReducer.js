import { combineReducers } from "redux";

import {
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
} from "../Actions/ActionTypes";

import { VisibilityFilters } from "../Actions/Constants";

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilters(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;

		default:
			return state;
	}
}

function todos(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [...state, { text: action.text, completed: false }];

		case TOGGLE_TODO:
			return state.map((todo, index) => {
				if (index === action.index)
					return Object.assign({}, todo, { completed: !todo.completed });

				return todo;
			});

		default:
			return state;
	}
}

const todoApp = combineReducers({
	visibilityFilters,
	todos,
});

export default todoApp;
