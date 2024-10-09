import React, { useState } from "react";
import profilepic from "../../images/Picture.png";

// Object to hold label texts for each input field
const labels = {
	employeeNumber: "Employee Number:",
	bloodGroup: "Blood Group:",
	aadharNumber: "Aadhar Card Number:",
	fullName: "Name:",
	gender: "Gender:",
	panNumber: "PAN Card Number:",
	personalEmail: "Personal Email ID:",
	maritalStatus: "Marital Status:",
	pfAccountNumber: "PF Account Number:",
	workEmail: "Work Email ID:",
	nationality: "Nationality:",
	salaryAccountNumber: "Salary Account Number:",
	contactNumber: "Contact Number:",
	religion: "Religion:",
	esiNumber: "ESI Number:",
	dateOfBirth: "Date of Birth:",
	category: "Category / Sub Category:",
	pfUANNumber: "PF UAN Number:",
};

// Object to hold educational qualifications
const educationalQualifications = [
	{
		id: 1,
		degree: "Graduation",
		institution: "Example institute of technology",
		course: "B.E",
		duration: "2014-2018",
		courseType: "Full time",
		markGrade: "6.7",
	},
	{
		id: 2,
		degree: "Class XII",
		institution: "S.K.T matric Hr. Sec. School",
		course: "Bio - Maths",
		duration: "2014",
		courseType: "Full-time",
		markGrade: "87.2",
	},
	{
		id: 3,
		degree: "Class X",
		institution: "S.K.T matric Hr. Sec. School",
		course: "matric",
		duration: "2012",
		courseType: "Full-time",
		markGrade: "87.2",
	},
];

// Object to hold work experiences
const workExperiences = [
	{ id: 1, company: "Tech Solutions Inc.", position: "Software Engineer", years: "2016-2019" },
	{ id: 2, company: "Data Systems Ltd.", position: "Senior Developer", years: "2020-present" },
];

// Object to hold contact details
const contactDetails = {
	Address: "Address:",
	Landmark: "Landmark:",
	Zipcode: "Zip code:",
	City: "City:",
	State: "State:",
	Country: "Country:",
	addresses: [
		{ id: "01", name: "Name of the person", relation: "Father", contact: "+91-98765 43210", address: "123 Main St, City, Country" },
		{ id: "02", name: "Name of the person", relation: "Father", contact: "+91-98765 43210", address: "123 Main St, City, Country" },
	],
	socialMedia: [{ id: "01", username: "Name of the person", relation: "Father", contact: "+91-98765 43210", address: "123 Main St, City, Country" }],
};
//objects to hold skill set
const skillSet = [
	{ id: 1, skill: "UI / UX design", Software: "Figma", LatestUsed: "2024 (Current)", Experience: "mm/yyyy" },
	{ id: 2, skill: "UI / UX design", Software: "Adobe XD", LatestUsed: "2024", Experience: "mm/yyyy" },
	{ id: 3, skill: "Graphic design", Software: "Photoshop", LatestUsed: "2024", Experience: "mm/yyyy" },
	{ id: 4, skill: "Video editing", Software: "Adobe After effects", LatestUsed: "2024", Experience: "mm/yyyy" },
];

function InformationDetails({ view }) {
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleCancel = () => {
		setSelectedFile(null);
	};

	const handleSave = () => {
		// Implement save logic here, such as uploading file or saving data
		// Example: Upload selected file to server or save form data
		console.log("Saving file:", selectedFile);
		// Reset selectedFile state after save
		setSelectedFile(null);
	};
	const renderForm = () => {
		switch (view) {
			case "Basic Information":
				return (
					<div className="bg-white rounded-lg shadow-md p-4">
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
							{Object.keys(labels).map((key) => (
								<div key={key} className="mb-4">
									<label htmlFor={key} className="block text-sm font-medium" style={{ color: "#999999" }}>
										{labels[key]}
									</label>
									<input
										type="text"
										id={key}
										name={key}
										className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm sm:text-sm"
									/>
								</div>
							))}
						</div>
					</div>
				);

			case "Educational Qualification":
				return (
					<div className="bg-white rounded-lg shadow-md p-4">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-[#E6EFF0]">
								<tr>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										SI. No.
									</th>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										Education
									</th>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										University / Institute
									</th>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										Course
									</th>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										Duration
									</th>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										Course Type
									</th>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										Mark / Grade
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{educationalQualifications.map((qualification, index) => (
									<tr key={qualification.id}>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{qualification.degree}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{qualification.institution}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{qualification.course}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{qualification.duration}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{qualification.courseType}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{qualification.markGrade}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				);

			case "Work Experience":
				return (
					<div className="bg-white rounded-lg shadow-md p-4">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-[#E6EFF0]">
								<tr>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										Company
									</th>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										Position
									</th>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										Years
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{workExperiences.map((experience, index) => (
									<tr key={experience.id}>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{experience.company}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{experience.position}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{experience.years}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				);

			case "Contact Info":
				return (
					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-medium text-gray-900">Address</h3>
							<div className="bg-white rounded-lg shadow-md p-4 mt-2">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									{Object.keys(contactDetails).map((key) => {
										if (key !== "addresses" && key !== "socialMedia") {
											return (
												<div key={key} className="mb-4">
													<label htmlFor={key} className="block text-sm font-medium text-gray-700">
														{contactDetails[key]}
													</label>
													<input
														type="text"
														id={key}
														name={key}
														className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm sm:text-sm"
													/>
												</div>
											);
										}
										return null;
									})}
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-lg font-medium text-gray-900">Family information</h3>
							<div className="bg-white rounded-lg drop-shadow-lg  p-4 mt-2">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-[#E6EFF0]">
										<tr>
											<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
												SI.No
											</th>
											<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
												Name
											</th>
											<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
												Relation
											</th>
											<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
												Contact number
											</th>
											<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
												Address
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200">
										{contactDetails.addresses.map((address, index) => (
											<tr key={index}>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{address.id}</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{address.name}</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{address.relation}</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{address.contact}</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{address.address}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						<div>
							<h3 className="text-lg font-medium text-gray-900">Social Media</h3>
							<div className="bg-white rounded-lg shadow-md p-4 mt-2">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-[#E6EFF0]">
										<tr>
											<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
												SI.No
											</th>
											<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
												Name
											</th>
											<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
												Relation
											</th>
											<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
												Contact number
											</th>
											<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
												Address
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200">
										{contactDetails.socialMedia.map((social, index) => (
											<tr key={index}>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{social.id}</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{social.username}</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{social.relation}</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{social.contact}</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{social.address}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				);

			case "Skill Set":
				return (
					<div className="bg-white rounded-lg shadow-md p-4">
						<h3 className="text-lg font-medium text-gray-900">Skill Set</h3>
						<table className="min-w-full divide-y divide-gray-200 mt-2">
							<thead className="bg-[#E6EFF0]">
								<tr>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										S.no
									</th>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										Skills
									</th>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										Software
									</th>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										Latest Used
									</th>
									<th scope="col" className="px-6 py-3 text-left text-base font-medium text-black-500 uppercase tracking-wider">
										Experience
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{skillSet.map((skill, index) => (
									<tr key={skill.id}>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{skill.id}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{skill.skill}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{skill.Software}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{skill.LatestUsed}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{skill.Experience}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				);
			case "Profile Image":
				return (
					<div className="bg-white rounded-lg shadow-md p-4">
						<h3 className="text-lg font-medium text-gray-900">Profile Image</h3>
						<div className="border-dashed border-4 border-gray-200 rounded-lg p-4 mt-2 flex justify-center items-center w-72">
							<input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileChange} accept="image/*,application/pdf" />
							<label htmlFor="fileInput" className="cursor-pointer">
								{selectedFile ? (
									<div>
										<p>{selectedFile.name}</p>
										{selectedFile.type.startsWith("image/") && (
											<img src={URL.createObjectURL(selectedFile)} alt="Selected file" className="w-32 h-32 object-cover" />
										)}
									</div>
								) : (
									<div>
										<img src={profilepic} alt="Placeholder" className="w-32 h-32 object-cover" />
										<p className="text-base font-medium">
											Drop your image here, or <span className="text-[#00565F]">browse</span>
										</p>
									</div>
								)}
							</label>
						</div>
						<div className="mt-4 flex justify-end space-x-2">
							<button className="bg-[#F0F1F3] text-gray-700 px-4 py-2 rounded-md shadow-sm" onClick={handleCancel}>
								Cancel
							</button>
							<button className="bg-[#00565F] text-white px-4 py-2 rounded-md shadow-sm" onClick={handleSave}>
								Save
							</button>
						</div>
					</div>
				);

			case "Change Password":
				return <div>Change Password Form</div>;
			default:
				return null;
		}
	};

	return <div>{renderForm()}</div>;
}

export default InformationDetails;
