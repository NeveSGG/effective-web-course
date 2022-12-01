/* eslint-disable prefer-const */
import React, { FC, useState, useEffect } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import { useNavigate } from 'react-router-dom';

interface IProps {
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  id: number;
  category: string;
}

interface CardDataObject {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
}

type CardData = Array<CardDataObject>;

const CustomCard: FC<IProps> = ({
  image,
  imageAlt,
  name,
  description,
  id,
  category
}) => {
  const [storageItem, setStorageItem] = useState<CardData>(() =>
    JSON.parse(window.localStorage.getItem('favourites') || '[]')
  );
  const isIdInStorage = storageItem.some((el) => el.id === id);

  const handleChangeFav = () => {
    if (!isIdInStorage) {
      const newStorageItem = [
        ...storageItem,
        {
          id,
          image,
          title: name,
          description,
          category
        }
      ];
      setStorageItem(newStorageItem);
      window.localStorage.setItem('favourites', JSON.stringify(newStorageItem));
    } else {
      const newStorageItem = storageItem.filter((el) => el.id !== id);
      setStorageItem(newStorageItem);
      window.localStorage.setItem('favourites', JSON.stringify(newStorageItem));
    }
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${category}/${id}`);
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        action={
          <IconButton onClick={handleChangeFav}>
            <GradeIcon color={isIdInStorage ? 'primary' : 'disabled'} />
          </IconButton>
        }
        title={name}
      />
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" height="220" image={image} alt={imageAlt} />
      </CardActionArea>
      <CardContent sx={{ minHeight: 200 }}>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
