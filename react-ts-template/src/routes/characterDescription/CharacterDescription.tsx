import React, { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Container,
  Grid,
  CircularProgress
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import charactersStore from 'stores/CharactersStore';

const CharacterDescription: FC = () => {
  const { character } = charactersStore;
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      const numberId = parseInt(id, 10);
      charactersStore.getCharacter(numberId);
    }
  }, [id]);

  // const checkIsCharacterFound = () => {
  //   return character.count ? (
  //     <CircularProgress sx={{ paddingTop: 30 }} />
  //   ) : (
  //     <Typography variant="h4" align="center" sx={{ pt: 20 }}>
  //       {`${t('Character')} ${t('with_index')} ${id} ${t('not_found')}.`}
  //     </Typography>
  //   );
  // };

  return (
    <Box>
      {character.count ? (
        <Card sx={{ minHeight: '92.8vh' }}>
          <CardMedia
            component="img"
            image={`${character.results[0].thumbnail.path}.${character.results[0].thumbnail.extension}`}
            alt={character.results[0].name}
            sx={{ height: { xs: 400, sm: 700 } }}
          />
          <Container>
            <CardContent>
              <Typography
                variant="h3"
                gutterBottom
                textAlign="center"
                sx={{ pt: 2 }}
              >
                {character.results[0].name}
              </Typography>
              {character.results[0].description ? (
                <Typography
                  variant="h6"
                  color="text.secondary"
                  gutterBottom
                  sx={{ pt: 2 }}
                >
                  {character.results[0].description}
                </Typography>
              ) : (
                <Typography
                  variant="h6"
                  color="text.secondary"
                  gutterBottom
                  sx={{ pt: 2 }}
                >
                  No description
                </Typography>
              )}
              <Grid container spacing={9} sx={{ pt: 10, pb: 6 }}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    textAlign="center"
                    color="text.secondary"
                  >
                    {t('Comics')}
                  </Typography>
                  {character.results[0].comics.items ? (
                    character.results[0].comics.items.map((comics) => (
                      <Typography
                        variant="body1"
                        gutterBottom
                        textAlign="center"
                        key={`${comics.name}999`}
                      >
                        <Link
                          to={`/comics/${comics.name}`}
                          style={{
                            fontSize: '20px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            color: '#F44336'
                          }}
                        >
                          {comics.name}
                        </Link>
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body1" gutterBottom textAlign="center">
                      Not Found
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    textAlign="center"
                    color="text.secondary"
                  >
                    {t('Series')}
                  </Typography>
                  {character.results[0].series.items ? (
                    character.results[0].series.items.map((series) => (
                      <Typography
                        variant="body1"
                        gutterBottom
                        textAlign="center"
                        key={`${series.name}888`}
                      >
                        <Link
                          to={`/series/${series.name}`}
                          style={{
                            fontSize: '20px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            color: '#F44336'
                          }}
                        >
                          {series.name}
                        </Link>
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body1" gutterBottom textAlign="center">
                      Not Found
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Container>
        </Card>
      ) : (
        <CircularProgress sx={{ margin: 30 }} />
      )}
    </Box>
  );
};

export default observer(CharacterDescription);
