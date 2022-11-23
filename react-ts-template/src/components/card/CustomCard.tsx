import React, { FC } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import { CardProps } from 'types/CardProps';
import { useNavigate } from 'react-router-dom';

const CustomCard: FC<CardProps> = ({
  image,
  imageAlt,
  name,
  description,
  pathname,
  id
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${pathname}${id}`);
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" height="220" image={image} alt={imageAlt} />
      </CardActionArea>
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
