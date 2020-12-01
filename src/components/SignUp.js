import Password from "./Password";
import { Component } from "react";

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			password: "",
			confirmPass: "",
		};
	}

	render() {
		const { password, confirmPass } = this.state;
		const { minimumLength } = this.props;
		let borderColour =
			password.length < minimumLength || password !== confirmPass ? "red" : "";

		return (
			<>
				<Password
					label="Password"
					handleChange={(e) =>
						this.setState({ password: e.currentTarget.value })
					}
					value={password}
					colour={borderColour}
				/>
				<Password
					label="Confirm Password"
					handleChange={(e) =>
						this.setState({ confirmPass: e.currentTarget.value })
					}
					value={confirmPass}
					colour={borderColour}
				/>
			</>
		);
	}
}

export default SignUp;
