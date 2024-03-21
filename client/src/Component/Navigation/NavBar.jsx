import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import user from "../../Assets/Icon/profile.png";
import home from "../../Assets/Icon/home.png";
import law from "../../Assets/Icon/action.png";
import search from "../../Assets/Icon/magnifying-glass.png";

import chatBot from "../../Assets/Icon/chatbot.png";
import chat from "../../Assets/Icon/chat.png";
// import UserAuth from "../Auth/UserStatus";


export default function NavBar() {


    const isLoggedIn = false; //fetch API for login status
    const userType = 'admin'; //fetch user type from API



    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);


    const logout = () => {
        // Define logout function
        // Perform logout action here
    };



    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebarOpen(false);
            }
        };

        if (sidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarOpen]);

const getRoute=()=>{
    const help =userType === 'admin' ? '/AdminLanding' : '/HomePage'
    console.log("Inside Get Route:",help)
    return help
}

    return (
        <header >
            <nav className="flex flex-col sm:flex-row justify-between items-center border border-solid border-gray-300 sticky top-0 z-10">
                {isLoggedIn ? (
                    <>
                        <ul className="mx-5 my-3 sm:my-2">
                            <li className="mx-5 my-3 sm:my-2" onClick={toggleSidebar}>
                                <div className="border border-black rounded-full  w-10 h-10">
                                    <img src={user} alt="user icon" className="w-10 h-10 cursor-pointer" />
                                </div>
                            </li>
                        </ul>

                        <ul className="flex flex-row justify-center items-end">
                            <li className="mx-5 my-3 sm:my-2">
                                <Link to={getRoute()}>
                                    <img src={home} alt="Home" className="w-9 h-9 cursor-pointer" />
                                </Link>
                            </li>
                            <li className="mx-5 my-3 sm:my-2 "><Link to='/Law-GPT'><img src={chatBot} alt="GPT" className="w-9 h-9 cursor-pointer " />   </Link> </li>
                            <li className="mx-5 my-3 sm:my-2 "><Link to='/Laws'><img src={law} alt="Laws" className="w-9 h-9 cursor-pointer" />   </Link> </li>
                            <li className="mx-5 my-3 sm:my-2 "><Link to='/AdvocateSearch'><img src={search} alt="Search" className="w-9 h-9 cursor-pointer" />   </Link> </li>
                            <li className="mx-5 my-3 sm:my-2 "><Link to='/Chats'><img src={chat} alt="Chats" className="w-9 h-9 cursor-pointer" />   </Link> </li>
                            <li className="mx-5 my-3 sm:my-2">
                                <div class="input-container">
                                    <input type="text" name="text" class="input" placeholder="search..." />
                                    <span class="icon">
                                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        {sidebarOpen && (
                            <aside ref={sidebarRef} className={`sidebar text-white w-60 absolute h-40 border-2 px-4 border-solid top-[72px] ${sidebarOpen ? 'active' : ''}`}>
                                <ul>
                                    <li className="text-white text-xl py-2 "><b><Link to="/Profile">Profile</Link></b></li>
                                    {/* <li className="text-white text-xl py-2 "><b><Link to="/cases">Cases</Link></b></li> */}
                                    <li className="text-white text-xl py-2 "><b><button onClick={logout}>Logout</button></b></li>
                                </ul>
                            </aside>
                        )}
                    </>
                ) : (
                    <>

                        <ul className="mx-20 my-3 sm:my-2"></ul>
                        <ul className="flex flex-row justify-evenly">
                            <li className="mx-5 my-3 sm:my-2 hover:cursor-pointer text-white" onClick={() => scrollToSection("services")}>Services </li>
                            <li className="mx-5 my-3 sm:my-2 hover:cursor-pointer text-white" onClick={() => scrollToSection("cases")}>Cases   </li>
                            <li className="mx-5 my-3 sm:my-2 hover:cursor-pointer text-white" onClick={() => scrollToSection("client")}>Client  </li>
                            <li className="mx-5 my-3 sm:my-2 hover:cursor-pointer text-white" onClick={() => scrollToSection("contact")}>Contact </li>
                        </ul>
                        <ul className="flex flex-row justify-center items-end">
                            <li className="mx-5 my-3 sm:my-2">
                                <Link to='/Login'><button className="bg-yellow-500 py-2 px-4 rounded-3xl">Consultation</button></Link>
                            </li>
                        </ul>
                    </>
                )}
            </nav>
        </header>
    );
}
