import "./App.css";

import Account from "./components/Account";
import WarningStrip from "./components/WarningStrip";
import Progress from "./components/Progress";
import Rules from "./components/Rules";
import Title from "./components/Title";
import Infromation from "./components/Infromation";

function App() {
	return (
		<div className="App">
			<main>
				<div className="box">
					<div className="half-box first-box">
						<Title />
						<WarningStrip />
						<Infromation />
					</div>
					<div className="half-box second-box">
						<Progress />
						<Rules />
						<Account />
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
