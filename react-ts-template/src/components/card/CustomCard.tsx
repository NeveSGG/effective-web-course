import React, { FC } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CardProps } from 'types/CardProps';
import translationStore from 'stores/TranslationStore';
import { useTranslation } from 'react-i18next';

const CustomCard: FC<CardProps> = ({ image, imageAlt, name, description }) => {
  const { t, i18n } = useTranslation();

  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia component="img" height="220" image={image} alt={imageAlt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t(description)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
