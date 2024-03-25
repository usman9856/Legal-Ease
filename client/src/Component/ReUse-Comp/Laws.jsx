import React, { useState } from "react";

import SimpleDropdown from "./dropDownContent";
import filter from "../../Assets/Icon/filter.png";
import file from "../../Assets/Icon/file.png";
import db_upload from "../../Assets/Icon/server.png";
import { useUserStatus, useLoginStatus } from '../Auth/UserStatus';

export default function Law() {

    const userType = useUserStatus() // fetch user type from API

    const [filterOpen, setFilterOpen] = useState(false);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [city, setCity] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [FileUpload, setFileUpload] = useState(false);


    const dropdownItems = [
        {
            title: "The Impact of Cybercrime Legislation on Digital Commerce",
            description: "Explores the effectiveness and implications of cybercrime laws on online businesses, addressing challenges and balancing privacy concerns."
        },
        {
            title: "Intellectual Property Rights in the Age of Artificial Intelligence",
            description: "Discusses evolving IP laws in the context of AI technology, focusing on copyright, patents, and regulatory frameworks."
        },
        {
            title: "Environmental Regulations and Corporate Accountability: Towards Sustainable Business Practices",
            description: "Investigates the role of laws in promoting sustainable business practices, analyzing environmental regulations and corporate governance."
        },
        {
            title: "Data Privacy Laws: Navigating the Complexities in a Globalized World",
            description: "Explores global data privacy regulations, discussing challenges for businesses in complying with diverse legal frameworks."
        },
        {
            title: "Legal Implications of Blockchain Technology: Beyond Cryptocurrencies",
            description: "Examines the legal landscape of blockchain technology beyond cryptocurrencies, addressing regulatory challenges and opportunities for innovation."
        }
    ];



    const toggleAddLaw = () => {
        setShowPopup(!showPopup);
        setTitle('');
        setDescription('');
    };
    const handleFilterState = () => {
        setFilterOpen(!filterOpen);
    };
    const handleSearch = () => {
        //handle search logic here
    };
    const handleUpload = () => {
        // Handle upload logic here
        // For now, let's just close the popup
        setShowPopup(false);
    };
    const handleFileUpload = () => {
        setFileUpload(!FileUpload)
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // Handle the file upload here
    };


    return (
        <div className="min-h-full">
            {userType === 'admin' && (
                <center>
                    <div className="max-w-[80%] flex justify-end mt-5">
                        <button className="bg-yellow-500 text-white py-2 px-4 rounded-3xl w-36" onClick={toggleAddLaw}>Add Law</button>
                    </div>
                </center>
            )}
            {showPopup && (
                <div className="fixed top-10 left-0 sm:w-full h-full flex items-center justify-center ">
                    <div className="transition-all duration-500 ease-in-out transform bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-xl w-[30%]">
                            <form onSubmit={handleUpload} method="post" className="p-5 rounded-md">
                                <div className="flex flex-col ">

                                    <input
                                        type="text"
                                        placeholder="Title"
                                        className="border border-gray-300 rounded-md w-full mb-4 p-2 text-white bg-gray-700"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />

                                    <textarea
                                        placeholder="Description (Max 500 words)"
                                        name="description"
                                        id="description"
                                        cols="30"
                                        rows="10"
                                        className="border border-gray-300 rounded-bl-md rounded-br-md w-full mb-4 p-2 text-white bg-gray-700"
                                        onChange={(e) => { setDescription(e.target.value) }}
                                        value={description}
                                    />
                                    <div className="flex flex-col justify-between items-start rounded-tl-md rounded-md border border-gray-300 mb-4 p-2 bg-gray-700">
                                        <input
                                            type="file"
                                            name="upload_doc"
                                            id="law_file"
                                            onChange={handleFileChange}
                                            className="bg-transparent w-full text-white"
                                            accept=".doc, .docx, .pdf" // Specify accepted file types
                                        />
                                        <p className="text-red-500 font-mono text-sm my-2">Only .docx, .doc and .pdf files format allowed</p>
                                    </div>
                                </div>


                                <div className="flex justify-between items-center">
                                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleAddLaw}>
                                        Close
                                    </button>
                                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                                        Upload
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex justify-between items-center mx-10">
                <h1 className="flex justify-center items-center mt-20 text-3xl font-mono text-white capitalize">LEGAL LIBRARY</h1>
                <img src={filter} alt="filter icon" className="cursor-pointer mt-20 w-10 h-10 border-2 border-black rounded bg-slate-500" onClick={handleFilterState} />
            </div>
            <div className="mx-10 mt-2 border-2 border-black flex justify-between items-start flex-wrap sm:flex-col" style={{ opacity: filterOpen ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}>
                <div className="flex items-start flex-wrap">
                    {/* Input fields to be shown when filter is open */}
                    <input style={{ padding: "1rem", border: "2px solid white", color: "black", margin: "0.5rem", borderRadius: "1rem", backgroundColor: "slategray" }} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <select style={{ padding: "1rem", border: "2px solid white", color: "black", margin: "0.5rem", borderRadius: "1rem", backgroundColor: "slategray" }} value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select Category</option>
                        <option value="divorce">Divorce</option>
                        <option value="child custody">Child Custody</option>
                        <option value="property">Property</option>
                        {/* Add other options as needed */}
                    </select>
                    <input style={{ padding: "1rem", border: "2px solid white", color: "black", margin: "0.5rem", borderRadius: "1rem", backgroundColor: "slategray" }} type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>

                <div>
                    <button className="border-2 border-white bg-green-500 text-black m-4 rounded-2xl w-32 h-12" onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className="min-h-screen h-full m-5 flex flex-col justify-start items-center py-10">
                {/* Map over the array and render each dropdown dynamically */}
                {dropdownItems.map((item, index) => (
                    <SimpleDropdown key={index} title={item.title} content={item.description} />
                ))}
            </div>
        </div>
    );
}
