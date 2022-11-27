import React, { FC } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface IProps {
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  id: number;
  category: string;
}

const CustomCard: FC<IProps> = ({
  image,
  imageAlt,
  name,
  description,
  id,
  category
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${category}/${id}`);
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" height="220" image={image} alt={imageAlt} />
      </CardActionArea>
      <CardContent sx={{ minHeight: 200 }}>
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
