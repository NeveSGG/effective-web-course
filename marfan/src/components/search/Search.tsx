import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { debounce } from 'lodash';
import { Box, Divider, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import charactersStore from 'stores/CharactersStore';
import seriesStore from 'stores/SeriesStore';
import comicsStore from 'stores/ComicsStore';

interface PropType {
  searchText: string;
  defaultValue: string;
}

const Search: FC<PropType> = ({ searchText, defaultValue }) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState<string>(defaultValue);

  useEffect(() => {
    if (query) {
      switch (searchText) {
        case 'Characters': {
          charactersStore.endReached = false;
          charactersStore.getMoreCharacters(0, query);
          break;
        }
        case 'Series': {
          seriesStore.endReached = false;
          seriesStore.getMoreSeries(0, query);
          break;
        }
        case 'Comics': {
          comicsStore.endReached = false;
          comicsStore.getMoreComics(0, query);
          break;
        }
        default: {
          break;
        }
      }
    } else if (query === '') {
      switch (searchText) {
        case 'Characters': {
          charactersStore.endReached = false;
          charactersStore.getMoreCharacters(0);
          break;
        }
        case 'Series': {
          seriesStore.endReached = false;
          seriesStore.getMoreSeries(0);
          break;
        }
        case 'Comics': {
          comicsStore.endReached = false;
          comicsStore.getMoreComics(0);
          break;
        }
        default: {
          break;
        }
      }
    }
  }, [query]);

  const updateQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleChange = debounce(updateQuery, 1000);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          gap: 3,
          alignItems: 'center'
        }}
      >
        <TextField
          id="outlined-search"
          label={t(`search_${searchText}`).toString()}
          defaultValue={defaultValue}
          type="search"
          sx={{ width: '100%' }}
          onChange={handleChange}
        />
      </Box>
      <Divider variant="middle" sx={{ my: 7 }} />
    </Box>
  );
};

export default observer(Search);
