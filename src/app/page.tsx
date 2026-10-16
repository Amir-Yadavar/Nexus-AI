"use client";
import ChatUI from "@/components/ui/chatUI/ChatUI";
import { useState } from "react";

type MessageType = {
  role: "user" | "assistant" | "system";
  content: string;
};

export default function Home() {
  const [inputUser, setInputUser] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);

  const handleSendMessage = async () => {
    if (inputUser.trim()) {
      const newMessages: MessageType[] = [
        ...messages,
        {
          role: "user",
          content: inputUser,
        },
      ];
      setMessages(newMessages);
      setInputUser("");
      if (newMessages.length) {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: newMessages }),
        });
        const data = await res.json();
        if (data?.success) {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: data.message,
            },
          ]);
        }
        console.log(data);
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
      <ChatUI/>
    </div>
  );
}
