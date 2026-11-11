export type MessageType = {
  role: "user" | "assistant" | "system";
  content: string;
};