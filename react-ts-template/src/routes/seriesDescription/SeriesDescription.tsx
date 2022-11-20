import React, { FC, useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Typography, Card, CardMedia, CardContent } from '@mui/material';

import { CardProps } from 'types/CardProps';

import seriesData from 'mocks/seriesData';

const SeriesDescription: FC = () => {
  const [id, setId] = useState<string | undefined>(useParams().id);
  const [idFound, setIdFound] = useState<boolean>(false);
  const [data, setData] = useState<CardProps | null>(null);

  useEffect(() => {
    if (id) {
      const numberId = parseInt(id, 10);
      setIdFound(seriesData.some((series) => series.id === numberId));
    } else {
      setIdFound(false);
    }
  }, [id]);

  const seriesDetails = () => {
    return (
      <Card sx={{ width: '100%' }}>
        <CardMedia
          component="img"
          sx={{ height: '30vh' }}
          image={data?.image}
          alt={data?.imageAlt}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data?.description}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return idFound ? (
    seriesDetails()
  ) : (
    <Typography>Comics with index {id} not found.</Typography>
  );
};

export default SeriesDescription;
