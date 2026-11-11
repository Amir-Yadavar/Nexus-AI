import { MessageType } from "@/types/chat";

type MessageListProps = {
  loading: boolean;
  messages: MessageType[];
};

function MessageList({ loading, messages }: MessageListProps) {
  return (
    <div className="mx-4 px-4 space-y-6">
      {messages.map((message, index) => {
        const isUser = message.role === "user";

        return (
          <div
            key={index}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] md:max-w-[75%] rounded-3xl px-4 py-3 shadow-sm wrap-break-word whitespace-pre-wrap
              
              ${
                isUser
                  ? "bg-blue-600 text-white rounded-br-md"
                  : "bg-gray-200 dark:bg-(--primary) border border-(--mid-gray) rounded-bl-md"
              }
            `}
            >
              {!isUser && (
                <div
                  className={`mb-1 text-xs font-semibold ${
                    isUser ? "text-blue-100" : "text-(--light-gray)"
                  }`}
                >
                  {isUser ? "You" : "Nexus AI"}
                </div>
              )}

              <p className="leading-7 text-sm md:text-base">
                {message.content}
              </p>
            </div>
          </div>
        );
      })}
      {loading && (
        <div className="flex justify-start">
          <div className="bg-gray-200 dark:bg-(--primary) border border-(--mid-gray) rounded-3xl rounded-bl-md px-4 py-3">
            Nexus AI is thinking...
          </div>
        </div>
      )}
    </div>
  );
}

export default MessageList;
