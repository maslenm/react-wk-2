import StepCounter from "./StepCounter";
import Clicked from "./Clicked";

const Reduced = () => (
	<>
		<Clicked />
		<StepCounter max={100} step={5} />
	</>
);

export default Reduced;
