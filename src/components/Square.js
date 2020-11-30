import { Component } from "react";

class Square extends Component {
	render() {
		let { colour, selected, handleClick } = this.props;
		let colourState = selected ? "green" : colour;

		return (
			<div
				onClick={handleClick}
				style={{
					backgroundColor: colourState,
					height: "200px",
					width: "200px",
				}}
			></div>
		);
	}
}

Square.defaultProps = {
	colour: "blue",
};

export default Square;
