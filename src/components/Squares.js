import Square from "./Square.js";
import { Component } from "react";

class Squares extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: 1,
		};
	}

	render() {
		let { selected } = this.state;
		let { colour } = this.props;

		return (
			<>
				<Square
					selected={selected === 1}
					colour={colour}
					handleClick={() => this.setState({ selected: 1 })}
				/>

				<Square
					selected={selected === 2}
					colour={colour}
					handleClick={() => this.setState({ selected: 2 })}
				/>
			</>
		);
	}
}

export default Squares;

/* 
const Squares = () => (
	<>
		<Square colour="red" />
		<Square colour="red" />
	</>
);

export default Squares;
 */
