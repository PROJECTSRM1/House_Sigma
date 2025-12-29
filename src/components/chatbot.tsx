import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./chatbot.module.css";

type Message = {
  from: "user" | "bot";
  text: string;
};

export default function ChatBotWindow({ onClose }: any) {
  const { t } = useTranslation();

  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi! 👋 I’m your AI Real Estate Assistant. How can I help you today?",
    },
  ]);

  // ===== RULE-BASED RESPONSE ENGINE =====
  const getBotResponse = (input: string): string => {
    const text = input.toLowerCase();

    // Ontario
    if (text.includes("ontario")) {
      return "🏡 Sure! Ontario has great options in Toronto, Brampton, Markham, and Ottawa. Are you looking for a condo, townhouse, or detached house?";
    }

    // Alberta
    if (text.includes("alberta")) {
      return "🏠 Alberta offers affordable homes in Calgary, Edmonton, and Airdrie. Would you prefer a townhouse, duplex, or detached property?";
    }

    // Calgary
    if (text.includes("calgary")) {
      return "📍 Calgary is perfect for families and professionals. Areas like Aspen Woods, Legacy, and Downtown offer excellent homes.";
    }

    // Edmonton
    if (text.includes("edmonton")) {
      return "🌆 Edmonton has great value properties, especially condos and duplexes. Downtown and South Edmonton are popular choices.";
    }

    // Budget-based
    if (text.includes("budget") || text.includes("cheap") || text.includes("affordable")) {
      return "💰 If budget is important, consider condos or townhouses in Alberta or suburban Ontario. What’s your budget range?";
    }

    // Rent
    if (text.includes("rent")) {
      return "📄 Looking to rent? Condos and townhouses near city centers are popular rental options. Which city are you interested in?";
    }

    // Buy
    if (text.includes("buy") || text.includes("purchase")) {
      return "📝 Buying a home is a great investment! Tell me the city, property type, and your budget, and I’ll suggest the best options.";
    }

    // Default fallback
    return "🤔 I can help you find properties by city, budget, or property type. Try asking something like: “Suggest me a house in Ontario”.";
  };

  // ===== SEND MESSAGE =====
  const sendMessage = () => {
    if (msg.trim() === "") return;

    const userMessage: Message = { from: "user", text: msg };
    const botReply: Message = {
      from: "bot",
      text: getBotResponse(msg),
    };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setMsg("");
  };

  return (
    <div className={styles.chatWindow}>
      {/* Header */}
      <div className={styles.chatHeader}>
        {t("ai_real_estate_assistant")}
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
      </div>

      {/* Body */}
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

      {/* Input */}
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
