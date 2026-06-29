function ChatMessage({ sender, text }) {
  return (
    <div
      className={`message ${
        sender === "user" ? "user-message" : "bot-message"
      }`}
    >
      {text}
    </div>
  );
}

export default ChatMessage;
