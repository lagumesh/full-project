import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa"; // Importing other icons from react-icons library
import { ImProfile } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAddTask, MdOutlinePayments } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
	const [activeItem, setActiveItem] = useState("profile");

	const handleItemClick = (item) => {
		setActiveItem(item);
	};

	const getItemClasses = (item) => {
		return item === activeItem ? "text-[#002225] underline font-bold" : "text-[#999999] font-normal";
	};

	return (
		<nav className="w-28 bg-white rounded-sm p-4 shadow-lg">
			<ul className="space-y-4">
				<li className="text-center">
					<a
						href="/dashboard"
						className={`block hover:bg-gray-200 p-2 rounded ${getItemClasses("dashboard")}`}
						onClick={() => handleItemClick("dashboard")}
					>
						<RxDashboard className={`w-6 h-6 mx-auto ${getItemClasses("dashboard")}`} />
						<span className={`block mt-1 ${getItemClasses("dashboard")}`}>Dashboard</span>
					</a>
				</li>
				<li className="text-center">
					<a
						href="/profile"
						className={`block hover:bg-gray-200 p-2 rounded ${getItemClasses("profile")}`}
						onClick={() => handleItemClick("profile")}
					>
						<ImProfile className={`w-6 h-6 mx-auto ${getItemClasses("profile")}`} />
						<span className={`block mt-1 ${getItemClasses("profile")}`}>Profile</span>
					</a>
				</li>
				<li className="text-center">
					<a href="/tasks" className={`block hover:bg-gray-200 p-2 rounded ${getItemClasses("tasks")}`} onClick={() => handleItemClick("tasks")}>
						<MdAddTask className={`w-6 h-6 mx-auto ${getItemClasses("tasks")}`} />
						<span className={`block mt-1 ${getItemClasses("tasks")}`}>My Task</span>
					</a>
				</li>
				<li className="text-center">
					<a
						href="/documents"
						className={`block hover:bg-gray-200 p-2 rounded ${getItemClasses("documents")}`}
						onClick={() => handleItemClick("documents")}
					>
						<FaFileAlt className={`w-6 h-6 mx-auto ${getItemClasses("documents")}`} />
						<span className={`block mt-1 ${getItemClasses("documents")}`}>Documents</span>
					</a>
				</li>
				<li className="text-center">
					<a
						href="/payroll"
						className={`block hover:bg-gray-200 p-2 rounded ${getItemClasses("payroll")}`}
						onClick={() => handleItemClick("payroll")}
					>
						<MdOutlinePayments className={`w-6 h-6 mx-auto ${getItemClasses("payroll")}`} />
						<span className={`block mt-1 ${getItemClasses("payroll")}`}>Payroll</span>
					</a>
				</li>
				<li className="text-center">
					<a
						href="/settings"
						className={`block hover:bg-gray-200 p-2 rounded ${getItemClasses("settings")}`}
						onClick={() => handleItemClick("settings")}
					>
						<IoSettingsOutline className={`w-6 h-6 mx-auto ${getItemClasses("settings")}`} />
						<span className={`block mt-1 ${getItemClasses("settings")}`}>Settings</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Sidebar;
