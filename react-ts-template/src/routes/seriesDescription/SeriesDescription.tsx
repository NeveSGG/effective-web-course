import React, { FC, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Typography, Card, CardMedia, CardContent } from '@mui/material';

import { CardProps } from 'types/CardProps';

import seriesData from 'mocks/seriesData';

const SeriesDescription: FC = () => {
  const [idFound, setIdFound] = useState<boolean>(false);
  const [data, setData] = useState<CardProps | null>(null);

  const ind = useParams().id;

  useMemo(() => {
    if (ind) {
      const indInt = parseInt(ind, 10);
      const t = seriesData.some((series) => series.id === indInt);
      if (t) {
        setIdFound(true);
        const newData = seriesData.find((x) => x.id === indInt);
        if (newData) setData(newData);
      } else {
        setIdFound(false);
      }
    } else {
      setIdFound(false);
    }
  }, [ind]);

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
    <Typography>Comics with index {ind} not found.</Typography>
  );
};

export default SeriesDescription;
