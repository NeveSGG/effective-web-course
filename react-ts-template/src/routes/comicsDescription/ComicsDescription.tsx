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
import comicsStore from 'stores/ComicsStore';

const ComicsDescription: FC = () => {
  const { comics } = comicsStore;
  const { id } = useParams();
  const { t } = useTranslation();

  const getIdFromURI = (s: string) => {
    const newArr = s.split('/');
    return newArr[newArr.length - 1];
  };

  useEffect(() => {
    if (id) {
      const numberId = parseInt(id, 10);
      comicsStore.getComics(numberId);
    }
  }, [id]);

  return (
    <Box>
      {comics.count ? (
        <Card sx={{ minHeight: '92.8vh' }}>
          <CardMedia
            component="img"
            image={`${comics.results[0].thumbnail.path}.${comics.results[0].thumbnail.extension}`}
            alt={comics.results[0].title}
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
                {comics.results[0].title}
              </Typography>
              {comics.results[0].description ? (
                <Typography
                  variant="h6"
                  color="text.secondary"
                  gutterBottom
                  sx={{ pt: 2 }}
                >
                  {comics.results[0].description}
                </Typography>
              ) : (
                <Typography
                  variant="h6"
                  color="text.secondary"
                  gutterBottom
                  sx={{ pt: 2 }}
                >
                  No comics
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
                    {t('Characters')}
                  </Typography>
                  {comics.results[0].characters.items.length ? (
                    comics.results[0].characters.items.map((character) => (
                      <Typography
                        variant="body1"
                        gutterBottom
                        textAlign="center"
                        key={`${character.resourceURI}999`}
                      >
                        <Link
                          to={`/character/${getIdFromURI(
                            character.resourceURI
                          )}`}
                          style={{
                            fontSize: '20px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            color: '#F44336'
                          }}
                        >
                          {character.name}
                        </Link>
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body1" gutterBottom textAlign="center">
                      No characters
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
                  {comics.results[0].series.name ? (
                    <Typography
                      variant="body1"
                      gutterBottom
                      textAlign="center"
                      key={`${comics.results[0].series.resourceURI}888`}
                    >
                      <Link
                        to={`/series/${getIdFromURI(
                          comics.results[0].series.resourceURI
                        )}`}
                        style={{
                          fontSize: '20px',
                          textDecoration: 'none',
                          fontWeight: 600,
                          color: '#F44336'
                        }}
                      >
                        {comics.results[0].series.name}
                      </Link>
                    </Typography>
                  ) : (
                    <Typography variant="body1" gutterBottom textAlign="center">
                      No Series
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

export default observer(ComicsDescription);
