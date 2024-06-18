// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import en from './locales/en.json';
import vi from './locales/vi.json';

i18n
    .use(LanguageDetector) // Detects the user's language
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources: {
            en: {
                translation: en
            },
            vi: {
                translation: vi
            }
        },
        fallbackLng: 'en', // Default language
        interpolation: {
            escapeValue: false // React already protects from XSS
        }
    });

export default i18n;
