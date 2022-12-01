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
  const [storage, setStorage] = useState<string | null>(
    localStorage.getItem('favourites')
  );
  const [parsedStorage, setParsedStorage] = useState<CardData | null>(null);
  const [isIdInStorage, setIsIdInStorage] = useState<boolean>(false);
  const [elementPosition, setElementPosition] = useState<number | null>(null);

  useEffect(() => {
    if (storage) {
      console.log(`1) storage: ${storage}`);
      const newParsedStorage = JSON.parse(storage);
      console.log(`2) parsedStorage: ${newParsedStorage}`);
      setParsedStorage(newParsedStorage);
      console.log(`2) parsedStorage: ${parsedStorage}`);
      const foundEl = parsedStorage?.find((el, ind) => {
        if (el.id === id) {
          setElementPosition(ind);
          return true;
        }
        return false;
      });
      if (foundEl) {
        setIsIdInStorage(true);
      } else {
        setIsIdInStorage(false);
      }
    }
  }, [storage]);

  const handleChangeFav = () => {
    console.log(
      `isIdInStorage: ${isIdInStorage}\nelementPosition: ${elementPosition}\nparsedStorage: ${parsedStorage}\nstorage: ${storage}`
    );
    if (isIdInStorage && (elementPosition || elementPosition === 0)) {
      console.log('3) trying to remove...');
      localStorage.setItem(
        'favourites',
        JSON.stringify(parsedStorage?.splice(elementPosition, 1))
      );
      setStorage(localStorage.getItem('favourites'));
    } else {
      console.log('3) trying to add...');
      if (parsedStorage) {
        localStorage.setItem(
          'favourites',
          JSON.stringify(
            parsedStorage.concat([
              {
                image,
                title: name,
                description,
                id,
                category
              }
            ])
          )
        );
      } else {
        localStorage.setItem(
          'favourites',
          JSON.stringify([
            {
              image,
              title: name,
              description,
              id,
              category
            }
          ])
        );
      }

      setStorage(localStorage.getItem('favourites'));
      console.log(`4) final storage: ${storage}`);
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
