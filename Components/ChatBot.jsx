import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { getAIResponse } from "../api/chatApi";

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I'm your AI Assistant. Ask me anything.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (question) => {
    if (!question.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: question,
      },
    ]);

    setLoading(true);

    const answer = await getAIResponse(question);

    setLoading(false);

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: answer,
      },
    ]);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        🤖 AI Assistant
      </div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            sender={msg.sender}
            text={msg.text}
          />
        ))}

        {loading && (
          <ChatMessage
            sender="bot"
            text="Thinking..."
          />
        )}

        <div ref={bottomRef}></div>
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default ChatBot;
