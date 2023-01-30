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
          no_characters: 'No Characters',
          no_comics: 'No Comics',
          no_series: 'No Series',
          no_characters_found: 'No Characters found',
          no_comics_found: 'No Comics found',
          no_series_found: 'No Series found',
          empty_fav: 'You can add characters, comics and series to your favourites',
          end_reached: 'That`s all for today',
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
          no_characters: 'Нет связанных героев',
          no_comics: 'Нет связанных комиксов',
          no_series: 'Нет связанных сериалов',
          no_characters_found: 'Герои не найдены',
          no_comics_found: 'Комиксы не найдены',
          no_series_found: 'Сериалы не найдены',
          empty_fav: 'Список Избранного пуст. Вы можете добавлять героев, комиксы и сериалы в Ваше Избранное, нажав на серую звёздочку.',
          end_reached: 'Конец',
          footer: 'Информация предоставлена'
        }
      }
    }
  });

export default i18n;