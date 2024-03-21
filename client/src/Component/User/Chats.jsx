import React, { useState } from "react";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");


    const username = 'Daniyal';
    const isLoggedIn = true; //fetch login status


    const handleMessageSend = () => {
        if (inputMessage.trim() !== "") {
            const newMessage = {
                text: inputMessage,
                sender: "You",
                time: new Date().toLocaleTimeString(),
                read: false
            };
            setMessages([...messages, newMessage]);
            setInputMessage("");
        }
    };

    const handleMessageClick = (index) => {
        const updatedMessages = [...messages];
        updatedMessages[index].read = true;
        setMessages(updatedMessages);
    };

    return (
        <div className="container mx-auto my-10 flex justify-center h-screen">
            {isLoggedIn?
            (<div className="max-w-lg w-full bg-gray-200 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2 bg-transparent">Chat Room</h2>
                <p>You are chatting with <b className="bg-transparent"> {username}</b></p>
                <div className="flex flex-col gap-2 h-[80%] bg-gray-400 my-4 rounded-3xl p-4">
                    {messages.map((message, index) => (
                        <p
                            key={index}
                            className={`text-sm p-2 rounded-lg ${message.sender === "You" ? "bg-blue-400 text-white self-end" : "bg-gray-300 text-black self-start"
                                }`}
                            onClick={() => handleMessageClick(index)}
                        >
                             {message.text}
                            <br />
                            <span className="text-xs text-gray-600 bg-transparent">{message.time}</span>
                            {message.sender !== "You" && message.read ? (
                                <span className="text-xs text-green-950 ml-1 bg-transparent">✔</span>
                            ) : null}
                        </p>
                    ))}
                </div>
                <div className="mt-auto flex">
                    <input
                        type="text"
                        className="flex-grow p-2 rounded-lg mr-2 text-gray-800 bg-gray-100"
                        placeholder="Type your message..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                handleMessageSend();
                            }
                        }}
                    />
                    <button className="p-2 bg-blue-500 text-white rounded-lg" onClick={handleMessageSend}>
                        Send
                    </button>
                </div>
            </div>):(
                <div>
                    <h1 className="text-white text-4xl font-bold font-mono">Please Login to Continue</h1>
                </div>
            )}
            
        </div>
    );
}
