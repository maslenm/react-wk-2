import { useState } from "react";

const StepCounter = ({ max, step }) => {
	const [count, setCount] = useState(0);

	const updateCountPlus = () => setCount(count + step);

	const updateCountMinus = () => setCount(count - step);

	return (
		<>
			<button onClick={count < max ? updateCountPlus : null}>+</button>
			<p>{count}</p>
			<button onClick={count > 0 ? updateCountMinus : null}>-</button>
		</>
	);
};

export default StepCounter;
