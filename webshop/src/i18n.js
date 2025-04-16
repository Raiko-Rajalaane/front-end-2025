import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18n/en.json';
import es from './i18n/es.json';
import et from './i18n/et.json';
import ru from './i18n/ru.json';

const resources = {
  en: {
    translation: en,
  },
  et: {
    translation: et,
  },
  ru: {
    translation: ru,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
