import React, { FC } from 'react';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { CardProps } from 'types/CardProps';

const CustomCard: FC<CardProps> = ({ image, imageAlt, name, description }) => {
  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardMedia component="img" height="220" image={image} alt={imageAlt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
