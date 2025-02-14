import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import language files
import en from "./languages/en";
import ru from './languages/ru';
import uz from './languages/uz';
import chn from './languages/chn';


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en.translation },
    ru: { translation: ru.translation },
    uz: { translation: uz.translation },
    chn: { translation: chn.translation },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback if language not found
  interpolation: {
    escapeValue: false // React already sanitizes
  }
});

export default i18n;
