"use client";
import { useState } from "react";

export default function Home() {
  const [inputUser, setInputUser] = useState("");

  const handleSendMessage = async () => {
    if (inputUser.trim()) {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userMessage: inputUser }),
      });
      const data = await res.json();
      console.log(data);
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
