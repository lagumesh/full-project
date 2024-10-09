import React, { useState } from "react";
import { buttons } from "../../buttons"; // Assuming buttons are imported from a file like "../../buttons"
import mainprofile from "../../images/mainprofile.png";
import InformationDetails from "../pages/InformationDetails";

const buttonClass = "w-[153px] h-fit bg-white text-[#002225] font-bold p-2 rounded border justify-center flex";
const buttonFitContentClass = "w-[153px] h-fit bg-white text-[#002225] font-bold p-2 rounded border justify-center flex";
const linkClass = "cursor-pointer text-[#999999] p-2 text-base";
const activeLinkClass = "cursor-pointer text-black underline p-2 text-base";

const Main = () => {
	// Set the initial state to "Basic Information"
	const [currentView, setCurrentView] = useState("Basic Information");

	const handleLinkClick = (view) => {
		setCurrentView(view);
	};

	// Split buttons into rows with exact number of buttons
	const firstRowButtons = buttons.slice(0, 6);
	const secondRowButtons = buttons.slice(6, 11);

	return (
		<main className="flex-grow p-4">
			<div className="flex flex-col lg:flex-row">
				{/* Image Card */}
				<div className="w-full lg:w-40 p-2 flex justify-center lg:justify-start">
					<div className="w-72">
						<img src={mainprofile} alt="Placeholder" className="w-full h-auto rounded" />
					</div>
				</div>
				{/* Buttons Container */}
				<div className="w-full lg:w-auto p-4 mt-3">
					{/* First Row */}
					<div className="flex flex-wrap justify-center lg:justify-start mb-4 items-center">
						<div className="flex flex-wrap justify-center lg:justify-start items-center">
							{firstRowButtons.map((button, index) => (
								<a href={button.link} key={index} className={`${buttonClass} mb-2 lg:mb-0 lg:mr-2`}>
									{button.text}
								</a>
							))}
							{/* Add an empty placeholder for the 6th button */}
							{firstRowButtons.length < 6 && <div className={`${buttonClass} mb-2 lg:mb-0 lg:mr-2`} style={{ visibility: "hidden" }} />}
						</div>
					</div>
					{/* Second Row */}
					<div className="flex flex-wrap justify-center lg:justify-start items-center">
						<div className="flex flex-wrap justify-center lg:justify-start gap-3 items-center">
							{secondRowButtons.map((button, index) => (
								<a href={button.link} key={index + 6} className={buttonFitContentClass}>
									{button.text}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
			{/* Information Card */}
			<div className="bg-white rounded-lg shadow-md p-4 mt-4">
				<div className="flex justify-between mb-4">
					<div onClick={() => handleLinkClick("Basic Information")} className={currentView === "Basic Information" ? activeLinkClass : linkClass}>
						Basic Information
					</div>
					<div
						onClick={() => handleLinkClick("Educational Qualification")}
						className={currentView === "Educational Qualification" ? activeLinkClass : linkClass}
					>
						Educational Qualification
					</div>
					<div onClick={() => handleLinkClick("Work Experience")} className={currentView === "Work Experience" ? activeLinkClass : linkClass}>
						Work Experience
					</div>
					<div onClick={() => handleLinkClick("Contact Info")} className={currentView === "Contact Info" ? activeLinkClass : linkClass}>
						Contact Info
					</div>
					<div onClick={() => handleLinkClick("Skill Set")} className={currentView === "Skill Set" ? activeLinkClass : linkClass}>
						Skill Set
					</div>
					<div onClick={() => handleLinkClick("Profile Image")} className={currentView === "Profile Image" ? activeLinkClass : linkClass}>
						Profile Image
					</div>
					<div onClick={() => handleLinkClick("Change Password")} className={currentView === "Change Password" ? activeLinkClass : linkClass}>
						Change Password
					</div>
				</div>
				{currentView && <InformationDetails view={currentView} />}
			</div>
		</main>
	);
};

export default Main;
