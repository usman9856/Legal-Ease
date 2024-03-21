import React, { useState, useEffect } from "react";

export default function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [isChatBotInitialized, setIsChatBotInitialized] = useState(false);
    const [receiver, setReceiver] = useState("");
    const [isMessageSeen, setIsMessageSeen] = useState(false);


    
    const isLoggedIn = true; //fetch login status




    // GPT-3 Welcome Message
    useEffect(() => {
        if (!isChatBotInitialized) {
            const welcomeMessage = {
                text: "Hello! I'm GPT-3. How can I assist you today?",
                sender: "ChatGPT",
                time: new Date().toLocaleTimeString(),
                read: false
            };
            setMessages([welcomeMessage]);
            setIsChatBotInitialized(true);
        }
    }, [isChatBotInitialized]);

    const handleMessageSend = () => {
        if (inputMessage.trim() !== "") {
            const newMessage = {
                text: inputMessage,
                sender: "You",
                receiver: receiver,
                time: new Date().toLocaleTimeString(),
                read: isMessageSeen  // Initially, set to the current state of isMessageSeen
            };
            setMessages([...messages, newMessage]);
            setInputMessage("");
            setIsMessageSeen(false); // Reset isMessageSeen after sending a message
        }
    };

    const handleMessageClick = (index) => {
        const updatedMessages = [...messages];
        updatedMessages[index].read = true; // Mark the message as read when clicked
        setMessages(updatedMessages);
        if (receiver === updatedMessages[index].sender) {
            setIsMessageSeen(true); // Set isMessageSeen to true if the receiver clicks the message
        }
    };

    return (
        <div className="container mx-auto my-10 flex justify-center h-screen">
            {isLoggedIn ? (<div className="max-w-2xl w-full bg-gray-200 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2 bg-transparent"><big className="bg-transparent">Consult with AI</big></h2>

                <div className="flex flex-col gap-2 h-[80%] bg-gray-300 my-4 rounded-3xl p-4">
                    {messages.map((message, index) => (
                        <p
                            key={index}
                            className={`text-sm p-2 rounded-lg ${message.sender === "You" ? "bg-blue-400 text-white self-end" : "bg-gray-200 text-black self-start"
                                }`}
                            onClick={() => handleMessageClick(index)}
                        >
                            {message.text}
                            <br />
                            <span className="text-xs text-gray-600 bg-transparent">{message.time}</span>
                            {message.sender === "You" && message.read ? (
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

                    <button className="p-2 bg-blue-500 text-white rounded-lg" onClick={handleMessageSend} >
                        Send
                    </button>
                </div>
            </div>) : (
                <div>
                    <h1 className="text-white text-4xl font-bold font-mono">Please Login to Continue</h1>
                </div>
            )}
        </div>
    );
}
