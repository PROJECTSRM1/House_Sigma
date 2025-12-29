import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./chatbot.module.css";

const API_BASE = "http://127.0.0.1:8000";  // your FastAPI backend

export default function ChatBotWindow({ onClose }: any) {
 const { t } = useTranslation();


  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! 👋 How can I help you?",
    },
  ]);

  const sendMessage = async () => {
    if (msg.trim() === "") return;

    // Add user message immediately
    const updatedMessages = [...messages, { from: "user", text: msg }];
    setMessages(updatedMessages);

    const userText = msg;
    setMsg(""); // clear input

    try {
      // 🔥 REAL BACKEND CALL
      const response = await fetch(`${API_BASE}/api/chatbot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await response.json();

      // Add bot message
      setMessages([
        ...updatedMessages,
        { from: "bot", text: data.response || "No response" },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages([
        ...updatedMessages,
        { from: "bot", text: "⚠️ Server error. Try again later." },
      ]);
    }
  };

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>{t("ai_real_estate_assistant")}<button className={styles.closeBtn} onClick={onClose}>✕</button>
      </div>
      <div className={styles.chatBody}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.from === "user" ? styles.userBubble : styles.botBubble}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className={styles.chatInputArea}>
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage}>{t("send")}</button>
      </div>
    </div>
  );
}
