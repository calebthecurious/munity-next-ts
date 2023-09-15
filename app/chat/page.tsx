"use client";

import React, { useState, useEffect } from "react";

type Message = {
  sender_id: number;
  content: string;
  timestamp: Date;
};

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const quickResponses = [
    "Hello! How can I help you?",
    "I'm available at 3pm.",
    "Sure, let's schedule that.",
    "Thank you for understanding!",
  ];

  useEffect(() => {
    // Fetch messages from the backend
    // This is a mock fetch, replace with your API call
    const fetchMessages = async () => {
      const data: Message[] = await fetch("/api/chats/1/messages").then((res) =>
        res.json()
      );
      setMessages(data);
    };

    fetchMessages();
  }, []);

  const handleSendMessage = () => {
    // Logic to send the message to the backend
    console.log("Sent Message:", input);
    setInput("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Chat</h1>

      <div className="mb-4 border rounded p-4">
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.sender_id}</strong>: {message.content}
          </div>
        ))}
      </div>

      <div className="mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Send
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Quick Responses</h2>
        {quickResponses.map((response, index) => (
          <button
            key={index}
            onClick={() => setInput(response)}
            className="text-blue-500 mr-2"
          >
            {response}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
