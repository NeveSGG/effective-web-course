import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
          Character: 'Character',
          Favourites: 'Favourites',
          Comics: 'Comics',
          Series: 'Series',
          language_label: 'Language',
          search: 'SEARCH',
          search_Characters: 'Search for characters by name',
          search_Comics: 'Search for comics by name',
          search_Series: 'Search for series by name',
          with_index: 'with index',
          not_found: 'not found',
          no_description: 'No Description',
          no_comics: 'No Comics',
          no_series: 'No Series',
          footer: 'Data provided by'
        }
      },
      ru: {
        translation: {
          Characters: 'Герои',
          Character: 'Герой',
          Favourites: 'Избранное',
          Comics: 'Комиксы',
          Series: 'Сериалы',
          language_label: 'Язык',
          search: 'ПОИСК',
          search_Characters: 'Поиск по героям',
          search_Comics: 'Поиск по комиксам',
          search_Series: 'Поиск по сериалам',
          with_index: 'с индексом',
          not_found: 'не найден',
          no_description: 'Без описания',
          no_comics: 'Нет связанных комиксов',
          no_series: 'Нет связанных сериалов',
          footer: 'Информация предоставлена'
        }
      }
    }
  });

export default i18n;