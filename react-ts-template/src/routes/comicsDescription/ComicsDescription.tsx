import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Container
} from '@mui/material';

import { CardProps } from 'types/CardProps';

import comicsData from 'mocks/comicsData';

const ComicsDescription: FC = () => {
  const [data, setData] = useState<CardProps | null>(null);
  const { id } = useParams();

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
              <Typography variant="body1" color="text.secondary">
                {data.description}
              </Typography>
            </CardContent>
          </Container>
        </Card>
      ) : (
        <Typography>Comics with index {id} not found.</Typography>
      )}
    </Box>
  );
};

export default ComicsDescription;
