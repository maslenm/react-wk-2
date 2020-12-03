import { useState } from "react";

const Counter = ({ initial, max }) => {
	const [counter, setCounter] = useState(initial);

	const updateCounterPlus = () => setCounter(counter + (counter < max ? 1 : 0));

	const updateCounterMinus = () => setCounter(counter - (counter > 0 ? 1 : 0));
	return (
		<>
			<button onClick={updateCounterPlus}>+</button>
			<p>{counter}</p>
			<button onClick={updateCounterMinus}>-</button>
		</>
	);
};

export default Counter;
