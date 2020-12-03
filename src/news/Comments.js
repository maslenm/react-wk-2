import { Component } from "react";
import axios from "../axios.js";

class Comments extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			comments: [],
		};
	}

	componentDidMount() {
		let { id } = this.props;
		axios.get(`/articles/${id}/comments`).then(({ data }) => {
			this.setState({
				loaded: true,
				comments: data.data,
			});
		});
	}

	render() {
		let { comments, loaded } = this.state;
		return !loaded ? (
			<p>Loading...</p>
		) : (
			<>
				<h2>Comments</h2>
				{comments.length === 0 ? (
					<p>Sorry, no comments posted.</p>
				) : (
					<ul className="list-group">
						{comments.map((comment) => (
							<li key={comment.id}>
								<p className="list-group-item">{comment.comment}</p>
							</li>
						))}
					</ul>
				)}
			</>
		);
	}
}

export default Comments;
