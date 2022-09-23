import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

const rgb = {
	r: Math.floor(Math.random() * 255),
	g: Math.floor(Math.random() * 255),
	b: Math.floor(Math.random() * 255)
}

ReactDOM.render(
	<App rgb={rgb} />,
	document.querySelector("#root")
);
