import React, { FC, useEffect, useState } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import CustomCard from 'components/card';

interface CardDataObject {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
}

type CardData = Array<CardDataObject>;

const Favourites: FC = () => {
  const storage = localStorage.getItem('favourites');
  const [parsedStorage, setParsedStorage] = useState<CardData | null>();

  useEffect(() => {
    if (storage) {
      setParsedStorage(JSON.parse(storage));
    }
  }, []);

  return (
    <Container>
      <Box
        sx={{
          pt: { xs: 10, sm: 13, md: 17, lg: 19 },
          pb: { xs: 7, sm: 10, md: 14, lg: 16 }
        }}
      >
        {parsedStorage ? (
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {parsedStorage.map((el) => (
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
          <Typography sx={{ paddingTop: 20 }}>
            You can add characters, comics and series to your favourites
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Favourites;
