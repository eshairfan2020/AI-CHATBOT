import { useState } from "react";

function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    onSend(input);

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Ask anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
