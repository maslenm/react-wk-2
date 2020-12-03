import { useState } from "react";

const Counter = ({ initial, max }) => {
	const [counter, setCounter] = useState(initial);

	const updateCounterPlus = () => setCounter(counter + 1);

	const updateCounterMinus = () => setCounter(counter - 1);
	return (
		<>
			<button onClick={counter < max ? updateCounterPlus : null}>+</button>
			<p>{counter}</p>
			<button onClick={counter > 0 ? updateCounterMinus : null}>-</button>
		</>
	);
};

export default Counter;
