import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import * as Type from "redux/constant";

function App() {
	const value = useSelector((state: RootStateOrAny) => state.numberReducer);
	const dispatch = useDispatch();

	const handelClick = () => {
		console.log("first");
		dispatch({ type: Type.INCREMENT });
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello Vite + React!</p>
				<p>
					<button type="button" onClick={handelClick}>
						count is: {value}
					</button>
				</p>
				<p>
					Edit <code>App.tsx</code> and save to test HMR updates.
				</p>
				<p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					{" | "}
					<a
						className="App-link"
						href="https://vitejs.dev/guide/features.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vite Docs
					</a>
				</p>
			</header>
		</div>
	);
}

export default App;
