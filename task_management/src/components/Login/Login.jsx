import React, { useState } from "react";
import LoginBanner from "../../images/Login_banner.png"; // Ensure correct import path
import avialogo from "../../images/avia-logo.png";
import vector from "../../images/vector.png";
import "./Login.css";

const Login = ({ onLoginSuccess }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = (e) => {
		e.preventDefault();
		if (username === "demo" && password === "1") {
			alert("Login successful!");
			onLoginSuccess(); // Update parent component's state
		} else {
			alert("Invalid credentials. Please try again.");
		}
	};

	return (
		<div className="flex h-screen items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${LoginBanner})` }}>
			{/* Left section with small logo */}
			<div className="flex flex-col items-start justify-center w-full sm:w-1/2 space-y-2 p-12">
				<img src={vector} alt="Small Logo" className="w-10 h-10" />
				<h1 className="text-white text-4xl font-extrabold">TASK MANAGEMENT SYSTEM</h1>
				<p className="text-white">Sign in to your Account</p>
			</div>

			{/* Right section with card */}
			<div className="w-full sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[600px] p-8">
				<div className="bg-white p-8 rounded-3xl shadow-md">
					<form onSubmit={handleSignIn} className="flex flex-col space-y-3">
						<img src={avialogo} alt="Logo" className="login-card-img" />
						<h2 className="text-3xl font-bold mb-0 ">Hello,</h2>
						<h2 className="text-3xl font-bold mt-0 mb-4">Welcome!</h2>

						<p className="text-base font-semibold">Sign in to your account</p>

						<div className="flex flex-col">
							<label htmlFor="username" className="text-sm font-medium text-gray-700">
								Username
							</label>
							<input
								type="text"
								id="username"
								name="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								required
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="password" className="text-sm font-medium text-gray-700">
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								required
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-[#00565F] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
						>
							Sign In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
