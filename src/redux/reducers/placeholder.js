import * as actions from "../actions/placeholder";

const initialState = {
	text: "Tellus Porta Etiam"
};

export default function placeholder(state = initialState, { type, payload }) {
	switch (type) {
		case actions.PLACEHOLDER:
			return {
				...state,
				...payload
				// Some new value
			};
		default:
			return state;
	}
}