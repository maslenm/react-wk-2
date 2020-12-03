import { useState } from "react";

const Square = ({ colour }) => {
	const [bgColour, setBgColour] = useState(true);

	const updateBgColour = () => setBgColour(!bgColour);

	return (
		<div
			onClick={updateBgColour}
			style={{
				backgroundColor: bgColour ? "green" : colour,
				height: "200px",
				width: "200px",
			}}
		></div>
	);
};

export default Square;
