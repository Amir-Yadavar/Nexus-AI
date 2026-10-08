"use client";
import { useState } from "react";

type MessageType = {
  role: string;
  content: string;
};

export default function Home() {
  const [inputUser, setInputUser] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);

  const handleSendMessage = async () => {
    if (inputUser.trim()) {
      const newMessages = [
        ...messages,
        {
          role: "user",
          content: inputUser,
        },
      ];
      setMessages(newMessages);
      setInputUser("");
      if (messages.length) {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: newMessages }),
        });
        const data = await res.json();
        if (data?.success) {
          setMessages([
            ...messages,
            { role: "assistant", content: data.message },
          ]);
        }
      }
    }
  };
  return (
    <div className="flex items-center">
      <input
        type="text"
        value={inputUser}
        onChange={(e) => setInputUser(e.target.value)}
      />
      <button onClick={handleSendMessage}>send</button>
    </div>
  );
}
