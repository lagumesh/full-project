import React, { useState } from "react";
import "./App.css"; // Import your global styles
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/pages/Main";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const handleLoginSuccess = () => {
		setIsAuthenticated(true);
	};

	return (
		<div className="App">
			{isAuthenticated ? (
				<div className="flex flex-col h-screen">
					<Header />
					<div className="flex flex-grow">
						<Sidebar />
						<Main />
					</div>
				</div>
			) : (
				<Login onLoginSuccess={handleLoginSuccess} />
			)}
		</div>
	);
}

export default App;
