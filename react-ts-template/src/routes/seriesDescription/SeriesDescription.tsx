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

import seriesData from 'mocks/seriesData';

const SeriesDescription: FC = () => {
  const [data, setData] = useState<CardProps | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const numberId = parseInt(id, 10);
      const foundData = seriesData.find((series) => series.id === numberId);
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
                    Characters
                  </Typography>
                  {data.related?.characters?.map((character) => (
                    <Typography variant="body1" gutterBottom textAlign="center">
                      <Link
                        to={`/${character.id}`}
                        style={{ fontSize: '20px', textDecoration: 'none' }}
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
                    Comics
                  </Typography>
                  {data.related?.comics?.map((comics) => (
                    <Typography variant="body1" gutterBottom textAlign="center">
                      <Link
                        to={`/comics/${comics.id}`}
                        style={{ fontSize: '20px', textDecoration: 'none' }}
                      >
                        {comics.name}
                      </Link>
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </CardContent>
          </Container>
        </Card>
      ) : (
        <Typography>Series with index {id} not found.</Typography>
      )}
    </Box>
  );
};

export default SeriesDescription;
