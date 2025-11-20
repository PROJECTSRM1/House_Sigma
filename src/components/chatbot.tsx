
import React, { useState } from "react";
import styles from "./ChatBot.module.css";

export default function ChatBotWindow({ onClose }: any) {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! 👋 How can I help you?"
    },
  ]);

  const sendMessage = () => {
    if (msg.trim() === "") return;

    const newMsgs = [...messages, { from: "user", text: msg }];
    setMessages(newMsgs);

    // Simulated AI response
    setTimeout(() => {
      setMessages([
        ...newMsgs,
        { from: "bot", text: "Hii How are You?" }
      ]);
    }, 600);

    setMsg("");
  };

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        AI Real Estate Assistant
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
      </div>

      <div className={styles.chatBody}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.from === "user"
                ? styles.userBubble
                : styles.botBubble
            }
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className={styles.chatInputArea}>
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
