import { Component } from "react";

class Square extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bgGreen: true,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ bgGreen: !this.state.bgGreen });
	}

	render() {
		let { colour } = this.props;
		let colourState = this.state.bgGreen ? "green" : colour;

		return (
			<div
				onClick={this.handleClick}
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
