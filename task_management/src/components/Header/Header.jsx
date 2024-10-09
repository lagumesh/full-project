import React, { useState } from "react";
import { FiBell, FiChevronDown, FiUser } from "react-icons/fi"; // Importing icons from react-icons library
import headerlogo from "../../images/header-logo.png";

const Header = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<header className="flex justify-between items-center p-4 bg-white shadow-md">
			<div className="flex items-center">
				<img src={headerlogo} alt="Logo" className="w-150" />
			</div>
			<div className="flex items-center space-x-4">
				<div className="flex items-center">
					<FiBell className="w-6 h-6 text-gray-600" />
					<div className="w-px h-6 bg-gray-300 mx-4"></div> {/* Vertical line */}
				</div>
				<div className="relative">
					<button onClick={toggleDropdown} className="flex items-center focus:outline-none">
						<FiUser className="w-6 h-6 text-gray-600 rounded-full bg-gray-200" />
						<span className="ml-2 text-gray-600 text-base font-medium">Lagumesh</span>
						<FiChevronDown className="w-5 h-5 text-gray-600 ml-1" />
					</button>
					{isDropdownOpen && (
						<div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
							<a href="/profile" className="block px-4 py-2 hover:bg-gray-200">
								Profile
							</a>
							<a href="/settings" className="block px-4 py-2 hover:bg-gray-200">
								Settings
							</a>
							<a href="/logout" className="block px-4 py-2 hover:bg-gray-200">
								Logout
							</a>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
