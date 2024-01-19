import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function CurrentDateTime() {
	const [currentTime] = useState(new Date());
	return <p>{currentTime.getFullYear()}</p>;
}
//eniso.ru/javascript-i-rabota-s-datoy-i-vremenem-realizatsiya-vyvoda-daty-i-vremeni-na-sayt

function App() {
	return /*#__PURE__*/ React.createElement(
		"div",
		{
			className: "App",
		},
		/*#__PURE__*/ React.createElement(
			"header",
			{
				className: "App-header",
			},
			/*#__PURE__*/ React.createElement("img", {
				src: logo,
				className: "App-logo",
				alt: "logo",
			}),
			/*#__PURE__*/ React.createElement(
				"p",
				null,
				"Edit ",
				/*#__PURE__*/ React.createElement("code", null, "src/App.js"),
				" and save to reload."
			),
			/*#__PURE__*/ React.createElement(
				"a",
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React"
			),
			CurrentDateTime()
		)
	);
}

export default App;
