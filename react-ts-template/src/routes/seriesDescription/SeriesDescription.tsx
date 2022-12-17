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
import seriesStore from 'stores/SeriesStore';

const SeriesDescription: FC = () => {
  const { series } = seriesStore;
  const { id } = useParams();
  const { t } = useTranslation();

  const getIdFromURI = (s: string) => {
    const newArr = s.split('/');
    return newArr[newArr.length - 1];
  };

  useEffect(() => {
    if (id) {
      const numberId = parseInt(id, 10);
      seriesStore.getSeries(numberId);
    }
  }, [id]);

  return (
    <Box>
      {series.count ? (
        <Card sx={{ minHeight: '92.8vh' }}>
          <CardMedia
            component="img"
            image={`${series.results[0].thumbnail.path}.${series.results[0].thumbnail.extension}`}
            alt={series.results[0].title}
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
                {series.results[0].title}
              </Typography>
              {series.results[0].description ? (
                <Typography
                  variant="h6"
                  color="text.secondary"
                  gutterBottom
                  sx={{ pt: 2 }}
                >
                  {series.results[0].description}
                </Typography>
              ) : (
                <Typography
                  variant="h6"
                  color="text.secondary"
                  gutterBottom
                  sx={{ pt: 2 }}
                >
                  {t('no_description')}
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
                  {series.results[0].characters.items[0] ? (
                    series.results[0].characters.items.map((character) => (
                      <Typography
                        variant="body1"
                        gutterBottom
                        textAlign="center"
                        key={`${character.resourceURI}`}
                      >
                        <Link
                          to={`/characters/${getIdFromURI(
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
                      {t('no_characters')}
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
                  {series.results[0].comics.items[0] ? (
                    series.results[0].comics.items.map((comic) => (
                      <Typography
                        variant="body1"
                        gutterBottom
                        textAlign="center"
                        key={`${comic.resourceURI}`}
                      >
                        <Link
                          to={`/comics/${getIdFromURI(comic.resourceURI)}`}
                          style={{
                            fontSize: '20px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            color: '#F44336'
                          }}
                        >
                          {comic.name}
                        </Link>
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body1" gutterBottom textAlign="center">
                      {t('no_comics')}
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

export default observer(SeriesDescription);
