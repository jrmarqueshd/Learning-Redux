import React from "react";

import AddTodo from "../../Containers/AddTodo";
import VisibleTodoList from "../../Containers/VisibleTodoList";
import Footer from "../Footer";

const App = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default App;
