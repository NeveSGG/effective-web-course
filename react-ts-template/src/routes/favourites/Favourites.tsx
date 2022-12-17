import React, { FC, useEffect, useState } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import CustomCard from 'components/card';
import favouritesStore from 'stores/FavouritesStore';
import { useTranslation } from 'react-i18next';

interface CardDataObject {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
}

type CardData = Array<CardDataObject>;

const Favourites: FC = () => {
  const { storage } = favouritesStore;
  const [stateStorage, setStateStorage] = useState<CardData>(storage);
  const { t } = useTranslation();

  useEffect(() => {
    setStateStorage(storage);
  }, [storage]);

  return (
    <Container>
      <Box
        sx={{
          pt: { xs: 10, sm: 13, md: 17, lg: 19 },
          pb: { xs: 7, sm: 10, md: 14, lg: 16 }
        }}
      >
        {stateStorage.length !== 0 ? (
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {stateStorage.map((el) => (
              <Grid item xs={12} sm={6} md={4} key={el.id}>
                <CustomCard
                  id={el.id}
                  name={el.title}
                  image={el.image}
                  imageAlt={el.title}
                  description={el.description}
                  category={el.category}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography sx={{ paddingTop: 20 }}>{t('empty_fav')}</Typography>
        )}
      </Box>
    </Container>
  );
};

export default observer(Favourites);
