import { useState } from "react";

const Square = ({ colour }) => {
	const [bgColour, setBgColour] = useState(true);

	const updateBgColour = () => setBgColour(!bgColour);

	const colourState = bgColour ? "green" : colour;

	return (
		<div
			onClick={updateBgColour}
			style={{
				backgroundColor: colourState,
				height: "200px",
				width: "200px",
			}}
		></div>
	);
};

export default Square;
