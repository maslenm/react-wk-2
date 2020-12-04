import { useReducer } from "react";

// the initial state
const initialState = { clicked: false };

//reducer functions
const clicker = (state) => {
	return {
		...state,
		clicked: true,
	};
};

const reducer = (state, action) => {
	switch (action.type) {
		case "CLICKED":
			return clicker(state);
		default:
			return state;
	}
};

const Clicked = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const { clicked } = state;

	return (
		<>
			<p onClick={() => dispatch({ type: "CLICKED" })}>
				{clicked ? "Clicked" : "Not clicked"}
			</p>
		</>
	);
};

export default Clicked;
