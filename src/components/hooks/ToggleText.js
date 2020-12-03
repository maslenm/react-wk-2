import { useState } from "react";

const ToggleText = ({ initial, alternative }) => {
	const [isInitial, setText] = useState(true);

	const updateText = () => setText(!isInitial);

	return (
		<>
			<button onClick={updateText}>Toggle</button>

			<p>{isInitial ? initial : alternative}</p>
		</>
	);
};

export default ToggleText;
