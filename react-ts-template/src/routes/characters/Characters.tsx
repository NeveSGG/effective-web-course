import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Grid, Box, Typography, Container } from '@mui/material';

import { useTranslation } from 'react-i18next';

import CustomCard from 'components/card';
import Search from 'components/search';

import charactersStore from 'stores/CharactersStore';

const Characters: FC = () => {
  const { t } = useTranslation();
  const { characters, loading } = charactersStore;

  useEffect(() => {
    charactersStore.getCharactersList();
  }, []);

  return (
    <Container>
      <Box
        sx={{
          pt: { xs: 10, sm: 13, md: 17, lg: 19 },
          pb: { xs: 7, sm: 10, md: 14, lg: 16 }
        }}
      >
        {loading ? (
          <Typography variant="h2" fontWeight={800} gutterBottom>
            <>Loading...</>
          </Typography>
        ) : (
          <>
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
              <Typography
                variant="h5"
                sx={{ pb: { xs: 1, sm: 2 } }}
                gutterBottom
              >
                ({characters.total})
              </Typography>
            </Box>
            <Search searchText="Characters" />
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {characters.results.map((character) => (
                <Grid item xs={12} sm={6} md={4} key={character.id}>
                  <CustomCard
                    image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    imageAlt={character.name}
                    name={character.name}
                    description={character.description}
                    id={character.id}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Box>
    </Container>
  );
};

export default observer(Characters);
