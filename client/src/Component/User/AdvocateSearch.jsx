import React, { useState } from "react";
import Card from "../ReUse-Comp/Card";
import filter from "../../Assets/Icon/filter.png";

export default function Search() {
    const [search, setSearch] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [city, setCity] = useState("");

    const handleFilterState = () => {
        setFilterOpen(!filterOpen);
    };

    const handleSearch = () => {
        // Handle search logic here
    };

    // Data for generating cards
    const cardsData = [
        {
            advocateName: "Advocate Name 1",
            price: "$100",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio officia deleniti. Expedita iste et illum, quaerat pariatur consequatur eum nihil itaque!",
            datePosted: "2024-02-19",
            location: "New York",
            tags: ['Divorce', 'Child Custody', 'Dowry'],
            rate:4,
        },
        {
            advocateName: "Product Name 2",
            price: "$200",
            description: "Another Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio officia deleniti. Expedita iste et illum, quaerat pariatur consequatur eum nihil itaque!",
            datePosted: "2024-02-20",
            location: "Los Angeles",
            tags: ['Legal Advice', 'Consultation'],
            rate:3,
        },
        {
            advocateName: "Service Name 3",
            price: "$150",
            description: "Yet another Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio officia deleniti. Expedita iste et illum, quaerat pariatur consequatur eum nihil itaque!",
            datePosted: "2024-02-21",
            location: "Chicago",
            tags: ['Divorce', 'Child Custody'],
            rate:5,
        }
    ];

    return (
        <div className="min-h-screen h-full">
            <div className="flex justify-between items-center flex-row-reverse">
                <div className="flex items-end justify-end p-5">
                    <div className="rounded-l p-5">
                        <div className="flex">
                            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                                <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition bg-transparent">
                                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                </svg>
                            </div>
                            <input type="text" className="w-full max-w-[250px] bg-white pl-2 text-base font-semibold outline-0" placeholder="" id="" value={search} onChange={(e) => setSearch(e.target.value)} />
                            <input type="button" value="Search" className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" />
                        </div>
                    </div>
                </div>
                <img src={filter} alt="filter icon" className="cursor-pointer mx-10 w-10 h-10 border-2 border-black rounded bg-slate-500" onClick={handleFilterState} />
            </div>
            <div className="mx-10 mt-2 border-2 border-black flex justify-between items-center" style={{ opacity: filterOpen ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}>
                <div className="flex items-start">
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

            <div className="flex justify-center items-center flex-col">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        advocateName={card.advocateName}
                        price={card.price}
                        description={card.description}
                        datePosted={card.datePosted}
                        location={card.location}
                        tags={card.tags}
                        rating={card.rate} // Make sure to pass the rating prop
                    />
                ))}
            </div>
        </div>
    );
}
