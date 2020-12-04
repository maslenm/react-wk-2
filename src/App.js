import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Squares from "./components/Squares.js";
import SignUp from "./components/SignUp";
import Button from "./components/Button";
import Articles from "./news/Articles";
import Article from "./news/Article";
import Clicked from "./components/hooks/Clicked";
import Square from "./components/hooks/Square";
import ToggleText from "./components/hooks/ToggleText";
import Counter from "./components/hooks/Counter";
import StepCounter from "./components/hooks/StepCounter";
import CatchMeIfYouCan from "./components/hooks/CatchMeIfYouCan";
import Reduced from "./components/hooks/reducer/Reduced";

const App = () => (
	<Router>
		<Route exact path="/news">
			<Articles />
		</Route>
		<Route
			path="/news/:id"
			render={({ match }) => <Article id={match.params.id} />}
		/>
		<Route exact path="/squares">
			<Squares colour="red" />
		</Route>
		<Route exact path="/signup">
			<SignUp minimumLength={12} />
		</Route>
		<Route exact path="/button">
			<Button></Button>
		</Route>
		<Route exact path="/clicked">
			<Clicked />
		</Route>
		<Route exact path="/square">
			<Square colour="hotpink" />
		</Route>
		<Route exact path="/toggletext">
			<ToggleText initial="Hello" alternative="World" />
		</Route>
		<Route exact path="/counter">
			<Counter initial={50} max={100} />
		</Route>
		<Route exact path="/stepcounter">
			<StepCounter max={100} step={5} />
		</Route>
		<Route exact path="/catchmeifyoucan">
			<CatchMeIfYouCan jump={100} />
		</Route>
		<Route exact path="/reduced">
			<Reduced />
		</Route>
	</Router>
);

export default App;
