import React from "react"


import law from "../../Assets/Icon/action.png";
import search from "../../Assets/Icon/magnifying-glass.png";
import chatBot from "../../Assets/Icon/chatbot.png";
import chat from "../../Assets/Icon/chat.png";
import amend_Profile from "../../Assets/Icon/user-avatar.png";
import amend_Law from "../../Assets/Icon/correction.png";
import { Link } from "react-router-dom";





export default function AdminPage() {


    return (
        <>
            <h1 className="flex justify-center items-center mt-20 text-3xl font-mono text-white">Welcome Admin!</h1>
            <div className="h-screen  flex justify-center items-center">
                <div>
                    <Link to='/Chats'><div className="border-2 border-black w-40 h-40 m-5 bg-blue-700 hover:-translate-y-10 duration-500 cursor-pointer items-center justify-center flex rounded-3xl "><img src={chat} alt="Chat" className="w-10 h-10 bg-transparent" /></div></Link>
                    <Link to='/AdvocateSearch'><div className="border-2 border-black w-40 h-40 m-5 bg-blue-700 hover:-translate-y-10 duration-500 cursor-pointer items-center justify-center flex rounded-3xl" ><img src={search} alt="Search" className="w-10 h-10 bg-transparent" /></div></Link>
                </div>
                <br />
                <div>
                    <Link to='/Law-GPT'><div className="border-2 border-black w-40 h-40 m-5 bg-blue-700 hover:-translate-y-10 duration-500  cursor-pointer items-center justify-center flex rounded-3xl" ><img src={chatBot} alt="GPT" className="w-10 h-10 bg-transparent" /></div></Link>
                    {/* <Link to='/Laws'><div className="border-2 border-black w-40 h-40 m-5 bg-blue-700 hover:-translate-y-10 duration-500 cursor-pointer flex-col items-center justify-center flex rounded-3xl "><img src={amend_Law} alt="Amend Law" className="w-10 h-10 bg-transparent" /></div></Link> */}
                    <Link to='/Laws'><div className="border-2 border-black w-40 h-40 m-5 bg-blue-700 hover:-translate-y-10 duration-500 cursor-pointer items-center justify-center flex rounded-3xl "><img src={law} alt="Law" className="w-10 h-10 bg-transparent" /></div></Link>
                </div>

                <div>
                    <Link to='/AmendUser'><div className="border-2 border-black w-40 h-40 m-5 bg-blue-700 hover:-translate-y-10 duration-500 cursor-pointer items-center justify-center flex rounded-3xl "> <img src={amend_Profile} alt="Amend Profile" className="w-10 h-10 bg-transparent" /></div></Link>
                    <div className="w-40 h-40 m-5 "></div>
                </div>


            </div>
        </>
    )


}
