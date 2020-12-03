import { Component } from "react";
import axios from "../axios.js";
import Comments from "./Comments";

class Article extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			article: {},
		};
	}

	componentDidMount() {
		let { id } = this.props;
		axios.get(`/articles/${id}`).then(({ data }) => {
			this.setState({
				loaded: true,
				article: data.data,
			});
		});
	}
	render() {
		let { article, loaded } = this.state;
		let { id } = this.props;

		return !loaded ? (
			<p>Loading...</p>
		) : (
			<>
				<h2>{article.title}</h2>
				<p>{article.content}</p>
				{article.tags.map((tags) => (
					<p className="badge badge-primary badge-pill">{tags}</p>
				))}

				<Comments id={id} />
			</>
		);
	}
}

export default Article;
