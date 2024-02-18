import i18next from 'i18next';

import { initReactI18next } from 'react-i18next';
import { fr } from './translations';

const resources = {
  fr: {
    translation: fr,
  },
};

i18next.use(initReactI18next).init({
  debug: false,
  lng: 'en',
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  resources,
});

export default i18next;
