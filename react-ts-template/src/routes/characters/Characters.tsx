import React, { FC, useRef, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Typography, Container, CircularProgress } from '@mui/material';

import { VirtuosoGrid, VirtuosoHandle } from 'react-virtuoso';

import CustomCard from 'components/card';
import Search from 'components/search';
import { ItemContainer, ItemWrapper, ListContainer } from 'components/grid';

import charactersStore from 'stores/CharactersStore';
import { Character } from 'types/character';

import { useTranslation } from 'react-i18next';

const Characters: FC = () => {
  const { t } = useTranslation();
  const { characters, searchResults, searchQuery, loading } = charactersStore;

  const virtuosoRef = useRef<VirtuosoHandle>(null);

  const loadMore = useCallback((ind: number) => {
    if (searchResults) {
      charactersStore.getMoreCharacters(ind + 1, searchQuery);
    } else {
      charactersStore.getMoreCharacters(ind + 1);
    }
  }, []);

  const Results = () => {
    if (characters.total === 0) {
      return <Typography>{t('no_characters_found')}</Typography>;
    }

    return (
      <VirtuosoGrid
        style={{ width: '100%' }}
        useWindowScroll
        data={characters.results}
        endReached={loadMore}
        components={{
          List: ListContainer,
          Item: ItemContainer,
          Footer: () => {
            return <CircularProgress />;
          },
          ScrollSeekPlaceholder: () => (
            <ItemWrapper>
              <CustomCard
                image=""
                imageAlt=""
                name=""
                description=""
                id={0}
                category="characters"
                isFound={false}
              />
            </ItemWrapper>
          )
        }}
        itemContent={(index: number, character: Character) => {
          return (
            <ItemWrapper>
              <CustomCard
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                imageAlt={character.name}
                name={character.name}
                description={character.description}
                id={character.id}
                category="characters"
              />
            </ItemWrapper>
          );
        }}
        ref={virtuosoRef}
      />
    );
  };

  return (
    <Container>
      <Box
        sx={{
          pt: { xs: 10, sm: 13, md: 17, lg: 19 },
          pb: { xs: 3, sm: 5, md: 7, lg: 8 }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            mb: 2,
            alignItems: 'end'
          }}
        >
          <Typography variant="h3" fontWeight={800} gutterBottom>
            <>{t('Characters')}</>
          </Typography>
          <Typography variant="h5" sx={{ pb: { xs: 1, sm: 2 } }} gutterBottom>
            ({characters.total})
          </Typography>
        </Box>
        <Search searchText="Characters" defaultValue={searchQuery} />
        {loading ? <CircularProgress /> : <Results />}
      </Box>
    </Container>
  );
};

export default observer(Characters);
