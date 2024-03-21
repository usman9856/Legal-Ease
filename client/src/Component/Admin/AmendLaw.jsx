// import React, { useState } from "react";

// import SimpleDropdown from "../ReUse-Comp/dropDownContent";
// import filter from "../../Assets/Icon/filter.png";

// export default function Law() {

//     const userType = 'admin' // fetch user type from API

//     const [filterOpen, setFilterOpen] = useState(false);
//     const [name, setName] = useState("");
//     const [category, setCategory] = useState("");
//     const [city, setCity] = useState("");

//     const handleFilterState = () => {
//         setFilterOpen(!filterOpen);
//     };
//     const handleSearch = () => {
//         //handle search logic here
//     };

//     const dropdownItems = [
//         {
//             title: "The Impact of Cybercrime Legislation on Digital Commerce",
//             description: "Explores the effectiveness and implications of cybercrime laws on online businesses, addressing challenges and balancing privacy concerns."
//         },
//         {
//             title: "Intellectual Property Rights in the Age of Artificial Intelligence",
//             description: "Discusses evolving IP laws in the context of AI technology, focusing on copyright, patents, and regulatory frameworks."
//         },
//         {
//             title: "Environmental Regulations and Corporate Accountability: Towards Sustainable Business Practices",
//             description: "Investigates the role of laws in promoting sustainable business practices, analyzing environmental regulations and corporate governance."
//         },
//         {
//             title: "Data Privacy Laws: Navigating the Complexities in a Globalized World",
//             description: "Explores global data privacy regulations, discussing challenges for businesses in complying with diverse legal frameworks."
//         },
//         {
//             title: "Legal Implications of Blockchain Technology: Beyond Cryptocurrencies",
//             description: "Examines the legal landscape of blockchain technology beyond cryptocurrencies, addressing regulatory challenges and opportunities for innovation."
//         }
//     ];

//     return (
//         <>
//             {userType === 'admin' && (
//                 <center>
//                     <div className="max-w-[80%] flex justify-end mt-5">
//                         <button className="bg-yellow-500 text-white py-2 px-4 rounded-3xl w-36">Add Law</button>
//                     </div>
//                 </center>
//             )}

//             <div className="flex justify-between items-center mx-10">
//                 <h1 className="flex justify-center items-center mt-20 text-3xl font-mono text-white capitalize">LEGAL LIBRARY</h1>
//                 <img src={filter} alt="filter icon" className="cursor-pointer mt-20 w-10 h-10 border-2 border-black rounded bg-slate-500" onClick={handleFilterState} />
//             </div>
//             <div className="mx-10 mt-2 border-2 border-black flex justify-between items-center" style={{ opacity: filterOpen ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}>
//                 <div className="flex items-start ">
//                     {/* Input fields to be shown when filter is open */}
//                     <input style={{ padding: "1rem", border: "2px solid white", color: "black", margin: "0.5rem", borderRadius: "1rem", backgroundColor: "slategray" }} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//                     <select style={{ padding: "1rem", border: "2px solid white", color: "black", margin: "0.5rem", borderRadius: "1rem", backgroundColor: "slategray" }} value={category} onChange={(e) => setCategory(e.target.value)}>
//                         <option value="">Select Category</option>
//                         <option value="divorce">Divorce</option>
//                         <option value="child custody">Child Custody</option>
//                         <option value="property">Property</option>
//                         {/* Add other options as needed */}
//                     </select>
//                     <input style={{ padding: "1rem", border: "2px solid white", color: "black", margin: "0.5rem", borderRadius: "1rem", backgroundColor: "slategray" }} type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
//                 </div>

//                 <div>
//                     <button className=" border-2 border-white bg-green-500 text-black m-4 rounded-2xl w-32 h-12" onClick={handleSearch}>Search</button>
//                 </div>

//             </div>
//             <div className="h-screen m-5 flex flex-col justify-start items-center py-10">
//                 {/* Map over the array and render each dropdown dynamically */}
//                 {dropdownItems.map((item, index) => (
//                     <SimpleDropdown key={index} title={item.title} content={item.description} />
//                 ))}
//             </div>
//         </>
//     );
// }
