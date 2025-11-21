import React from "react";
import { MessageSquare } from "lucide-react";
import styles from "./chatbot.module.css";

export default function FloatingChatButton({ onOpen }: any) {
  return (
    <button className={styles.floatingButton} onClick={onOpen}>
      <MessageSquare size={22} />
    </button>
  );
}
