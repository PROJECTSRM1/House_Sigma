
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from "./en.json";
import hi from "./hi.json";
import te from "./te.json";

const STORAGE_KEY = "i18nextLng";

const initialLng =
  (typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY)) ||
  "en";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      te: { translation: te },
    },
    lng: initialLng,
    fallbackLng: "en",
    supportedLngs: ["en", "hi", "te"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

  i18n.on("languageChanged", (lng) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lng);
    } catch {
      // ignore
    }
  });
}

export default i18n;