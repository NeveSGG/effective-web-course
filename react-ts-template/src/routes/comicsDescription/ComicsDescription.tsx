import React, { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Container,
  Grid
} from '@mui/material';

import { CardProps } from 'types/CardProps';

import comicsData from 'mocks/comicsData';
import { useTranslation } from 'react-i18next';

const ComicsDescription: FC = () => {
  const [data, setData] = useState<CardProps | null>(null);
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      const numberId = parseInt(id, 10);
      const foundData = comicsData.find((comics) => comics.id === numberId);
      if (foundData) {
        setData(foundData);
      }
    }
  }, [id]);

  return (
    <Box>
      {data ? (
        <Card sx={{ minHeight: '95vh' }}>
          <CardMedia
            component="img"
            image={data.image}
            alt={data.imageAlt}
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
                {data.name}
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                gutterBottom
                sx={{ pt: 2 }}
              >
                {data.description}
              </Typography>
              <Grid container spacing={2} sx={{ pt: 10, pb: 6 }}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    textAlign="center"
                    color="text.secondary"
                  >
                    {t('Characters')}
                  </Typography>
                  {data.related?.characters?.map((character) => (
                    <Typography
                      variant="body1"
                      gutterBottom
                      textAlign="center"
                      key={`${character.name}555`}
                    >
                      <Link
                        to={`/${character.id}`}
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
                  ))}
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
                  {data.related?.series?.map((series) => (
                    <Typography
                      variant="body1"
                      gutterBottom
                      textAlign="center"
                      key={`${series.name}777`}
                    >
                      <Link
                        to={`/series/${series.id}`}
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
                  ))}
                </Grid>
              </Grid>
            </CardContent>
          </Container>
        </Card>
      ) : (
        <Typography variant="h4" align="center" sx={{ pt: 20 }}>
          {`${t('Comics')} ${t('with_index')} ${id} ${t('not_found')}.`}
        </Typography>
      )}
    </Box>
  );
};

export default ComicsDescription;
