import { useState } from "react";

const Clicked = () => {
	const [click, setClick] = useState(false);

	const updateClick = () => setClick(true);

	return <p onClick={updateClick}>{click ? "Clicked!" : "Not clicked!"}</p>;
};

export default Clicked;
