import React, { FC, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent
} from '@mui/material';

import { CardProps } from 'types/CardProps';

import charactersData from 'mocks/charactersData';

const CharacterDescription: FC = () => {
  const [idFound, setIdFound] = useState<boolean>(false);
  const [data, setData] = useState<CardProps | null>(null);

  const ind = useParams().id;

  useMemo(() => {
    if (ind) {
      const indInt = parseInt(ind, 10);
      const t = charactersData.some((character) => character.id === indInt);
      if (t) {
        setIdFound(true);
        const newData = charactersData.find((x) => x.id === indInt);
        if (newData) setData(newData);
      } else {
        setIdFound(false);
      }
    } else {
      setIdFound(false);
    }
  }, [ind]);

  const characterDetails = () => {
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
    characterDetails()
  ) : (
    <Typography>Character with index {ind} not found.</Typography>
  );
};

export default CharacterDescription;
