"use client";
import { useEffect, useRef, useState } from "react";

import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import { MessageType } from "@/types/chat";
import Sidebar from "./Sidebar";

function ChatUI() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [inputUser, setInputUser] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  // auto scroll to end message

  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messageContainerRef.current;

    if (!container) return;

    container.scrollTop = container.scrollHeight;
  }, [messages]);

  // handle send message to server
  const handleSendMessage = async () => {
    if (isLoading) return;
    if (!inputUser.trim()) return;

    setIsLoading(true);
    try {
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
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const enterClickHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <section>
      <div className="flex h-dvh w-full overflow-hidden bg-(--background)">
        {/* sidebar */}
        <Sidebar isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />

        {/* container message and input */}
        <div className="flex flex-1 flex-col relative overflow-hidden transition-all duration-300">
          {!messages.length ? (
            <div className="flex justify-center items-center w-full h-full">
              <div className="">
                <h2 className="font-bold text-center text-3xl py-6 text-(--light-gray)">
                  Hi, what can I help you with?
                </h2>
                <ChatInput
                  loading={isLoading}
                  onSend={handleSendMessage}
                  onKeyDown={enterClickHandler}
                  valueInput={inputUser}
                  setValue={setInputUser}
                />
              </div>
            </div>
          ) : (
            <>
              {/* content messages */}
              <div
                className="flex-1 overflow-y-auto pb-32 pt-6"
                ref={messageContainerRef}
              >
                <MessageList loading={isLoading} messages={messages} />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4">
                <ChatInput
                  loading={isLoading}
                  onSend={handleSendMessage}
                  onKeyDown={enterClickHandler}
                  valueInput={inputUser}
                  setValue={setInputUser}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ChatUI;
