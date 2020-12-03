import { Component } from "react";
import axios from "../axios.js";
import { Link } from "react-router-dom";

class Articles extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			articles: [],
		};
	}

	componentDidMount() {
		axios.get("/articles").then(({ data }) => {
			this.setState({
				loaded: true,
				articles: data.data,
			});
		});
	}

	render() {
		let { articles, loaded } = this.state;
		let { id } = this.props;
		return !loaded ? (
			<p>Loading...</p>
		) : (
			<>
				<h2>Articles</h2>
				<ul className="list-group">
					{articles.map((article) => (
						<li key={article.id} className="list-group-item">
							<Link to={`/news/${article.id}`}>{article.title}</Link>
							{article.tags.map((tags) => (
								<p className="badge badge-primary badge-pill">{tags}</p>
							))}
						</li>
					))}
				</ul>
			</>
		);
	}
}

export default Articles;
