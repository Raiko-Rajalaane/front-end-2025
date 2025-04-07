import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import estonian from "./i18n/et.json"
import english from "./i18n/en.json"


const resources = {
  en: {
    translation: english
  },
  et: {
    translation: estonian
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: localStorage.getItem("keel") || "et", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;