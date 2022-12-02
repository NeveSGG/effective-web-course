import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
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

import favouritesStore from 'stores/FavouritesStore';

import { useTranslation } from 'react-i18next';

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
  const { storage } = favouritesStore;

  const handleChangeFav = () => {
    if (!favouritesStore.checkIsFavourite(id)) {
      const newStorageItem = [
        ...storage,
        {
          id,
          image,
          title: name,
          description,
          category
        }
      ];
      favouritesStore.updateStorage(newStorageItem);
    } else {
      const newStorageItem = storage.filter((el) => el.id !== id);
      favouritesStore.updateStorage(newStorageItem);
    }
  };

  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${category}/${id}`);
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        action={
          <IconButton onClick={handleChangeFav}>
            <GradeIcon
              color={
                favouritesStore.checkIsFavourite(id) ? 'primary' : 'disabled'
              }
            />
          </IconButton>
        }
        title={name}
      />
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" height="220" image={image} alt={imageAlt} />
      </CardActionArea>
      <CardContent sx={{ minHeight: 200 }}>
        <Typography variant="body1" color="text.secondary">
          {description || t('no_description')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default observer(CustomCard);
