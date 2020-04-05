import { connect } from "react-redux";

import { setVisibilityFilter } from "../../Actions/ActionsCreators";

import Link from "../../Components/Link";

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => {
		dispatch(setVisibilityFilter(ownProps.filter));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
