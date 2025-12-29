import React from "react";
import { useTranslation } from "react-i18next";
import { MessageSquare } from "lucide-react";
import styles from "./chatbot.module.css";

export default function FloatingChatButton({ onOpen }: any) {
  const { t } = useTranslation();


  return (
    <button className={styles.floatingButton} onClick={onOpen}>
      <MessageSquare size={22} />
    </button>
  );
}
