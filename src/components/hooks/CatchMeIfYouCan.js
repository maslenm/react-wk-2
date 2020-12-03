import { useState } from "react";

const CatchMeIfYouCan = ({ jump }) => {
	const [position, setPosition] = useState(0);

	const updatePosition = () => setPosition(position + jump);
	return (
		<button
			onClick={updatePosition}
			style={{ position: "relative", top: position }}
		>
			Click Me!
		</button>
	);
};

export default CatchMeIfYouCan;
