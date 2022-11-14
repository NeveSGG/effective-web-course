import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          Characters: 'Characters',
          Comics: 'Comics',
          Series: 'Series',
          language_label: 'Language',
          search: 'SEARCH',
          search_Characters: 'Search for characters by name',
          search_Comics: 'Search for comics by name',
          search_Series: 'Search for series by name',
          footer: 'Data provided by'
        }
      },
      ru: {
        translation: {
          Characters: 'Герои',
          Comics: 'Комиксы',
          Series: 'Сериалы',
          language_label: 'Язык',
          search: 'ПОИСК',
          search_Characters: 'Поиск по героям',
          search_Comics: 'Поиск по комиксам',
          search_Series: 'Поиск по сериалам',
          footer: 'Информация предоставлена'
        }
      }
    }
  });

export default i18n;