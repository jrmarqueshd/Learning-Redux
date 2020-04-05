import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../../Actions/ActionsCreators";

const AddTodo = ({ dispatch }) => {
	let input;

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (!input.value.trim()) return;

					dispatch(addTodo(input.value));

					input.value = "";
				}}
			>
				<input ref={(ref) => (input = ref)} />
				<button type="submit">Add todo</button>
			</form>
		</div>
	);
};

export default connect()(AddTodo);
