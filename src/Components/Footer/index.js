import React from "react";

import { VisibilityFilters } from "../../Actions/Constants";

import FilterLink from "../../Containers/FilterLink";

const Footer = () => (
	<p>
		<span>Show: </span>
		<FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
		<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
		<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
	</p>
);

export default Footer;
