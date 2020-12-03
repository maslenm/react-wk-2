import { useState } from "react";

const StepCounter = ({ max, step }) => {
	const [count, setCount] = useState(0);

	const updateCountPlus = () => setCount(count + (count < max ? step : 0));

	const updateCountMinus = () => setCount(count - (count > 0 ? step : 0));

	return (
		<>
			<button onClick={updateCountPlus}>+</button>
			<p>{count}</p>
			<button onClick={updateCountMinus}>-</button>
		</>
	);
};

export default StepCounter;
