"use client";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { useState } from "react";
import { BsLayoutSidebar } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import { RiSendInsFill } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";

type MessageType = {
  role: "user" | "assistant" | "system";
  content: string;
};

function ChatUI() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
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
    <section>
      <div className="flex h-dvh w-full overflow-hidden bg-(--background)">
        {/* sidebar */}
        <aside
          className={`hidden lg:block shrink-0 overflow-hidden transition-all duration-300 ease-in-out border-r border-(--mid-gray)
          ${isAsideOpen ? "w-70" : "w-10"}
          `}
        >
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center overflow-hidden whitespace-nowrap transition-all duration-300
               ${isAsideOpen ? "w-auto opacity-100" : "w-0 opacity-0 pointer-events-none"}`}
            >
              <h1 className="font-bold mr-2 px-2">Nexus Ai</h1>
              <ThemeToggle />
            </div>

            <button
              onClick={() => setIsAsideOpen((prev) => !prev)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl  transition hover:bg-(--surface-secondary)"
            >
              <BsLayoutSidebar
                size={20}
                className="text-(--light-gray) cursor-pointer"
              />
            </button>
          </div>
        </aside>
        {/* container message and input */}
        <div className="flex flex-1 flex-col relative overflow-hidden transition-all duration-300">
          {!messages.length ? (
            <div className="flex justify-center items-center w-full h-full">
              <div className="">
                <h2 className="font-bold text-center text-3xl py-6 text-(--light-gray)">
                  Hi, what can I help you with?
                </h2>
                {/* input sec */}
                <div className="flex justify-center items-center">
                  <div className="flex items-center p-2 rounded-3xl bg-gray-200 dark:bg-(--primary) border border-(--mid-gray) w-80 md:w-100 lg:w-150">
                    <span className="px-2 text-2xl text-(--light-gray) cursor-pointer">
                      <TiPlus />
                    </span>
                    <input
                      type="text"
                      placeholder="Message Nexus .."
                      className="border-0 outline-0 p-2 w-full"
                      value={inputUser}
                      onChange={(e) => setInputUser(e.target.value)}
                    />
                    <span
                      className="px-2 text-2xl text-(--light-gray) cursor-pointer"
                      onClick={handleSendMessage}
                    >
                      <RiSendInsFill />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute bottom-0 left-0 w-full p-4">
              {/* input sec */}
              <div className="flex justify-center items-center">
                <div className="flex items-center p-2 rounded-3xl bg-gray-200 dark:bg-(--primary) border border-(--mid-gray) w-80 md:w-100 lg:w-150">
                  <span className="px-2 text-2xl text-(--light-gray) cursor-pointer">
                    <TiPlus />
                  </span>
                  <input
                    type="text"
                    placeholder="Message Nexus .."
                    className="border-0 outline-0 p-2 w-full"
                    value={inputUser}
                    onChange={(e) => setInputUser(e.target.value)}
                  />
                  <span
                    className="px-2 text-2xl text-(--light-gray) cursor-pointer"
                    onClick={handleSendMessage}
                  >
                    <RiSendInsFill />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ChatUI;
