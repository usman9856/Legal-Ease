import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import UserAuth from "../Auth/userStatus"; // Import as UserAuth




export default function Login() {
    const navigate = useNavigate(); // Corrected the syntax
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    //set login status
    const handleLogin = (e) => {
        e.preventDefault();
        

        navigate('/HomePage');
    };

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="flex flex-col border border-solid p-14 rounded-2xl w-[400px] h-[550px]">
                    <center><h2 className="text-white text-2xl mb-4">WELCOME BACK!</h2></center>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-white mb-2" htmlFor="email">Email</label>
                            <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2" htmlFor="password">Password</label>
                            <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <hr className="my-10" />
                        <p className="text-white mb-4">Forgot your password? <a href="/forgot-password" className="text-blue-500">Reset it here</a></p>
                        <p className="text-white mb-4">Not a user yet? <a href="/Signup" className="text-blue-500">Sigup here</a></p>
                        <p className="text-white mb-4">Login as Lawyer <a href="/LoginAdvocate" className="text-blue-500">Login</a></p>
                        <button className=" animate-pulse w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}
