import { useState } from "react";

const ToggleText = ({ initial, alternative }) => {
	const [text, setText] = useState(true);

	const updateText = () => setText(!text);

	return (
		<>
			<button onClick={updateText}>Toggle</button>
			{text ? initial : alternative}
			<p>{text}</p>
		</>
	);
};

export default ToggleText;
