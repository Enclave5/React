import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function CurrentDateTime() {
	const [currentTime] = useState(new Date());
	return <p>{currentTime.getFullYear()}</p>;
}
//eniso.ru/javascript-i-rabota-s-datoy-i-vremenem-realizatsiya-vyvoda-daty-i-vremeni-na-sayt

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				{CurrentDateTime()}
			</header>
		</div>
	);
}

// export default CurrentDateTime;

export default App;
