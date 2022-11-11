import React, { FC } from 'react';
import { Grid, Box, Typography } from '@mui/material';

import CustomCard from 'components/card';
import Search from 'components/search';

import comicsData from 'mocks/comicsData';

const Comics: FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          mb: 2,
          alignItems: 'end'
        }}
      >
        <Typography variant="h3" fontWeight={800} gutterBottom>
          Comics
        </Typography>
        <Typography variant="h5" sx={{ pb: 2 }} gutterBottom>
          (3)
        </Typography>
      </Box>
      <Search searchText="Comics" />
      <Grid container spacing={2} xs={12}>
        {comicsData.map((comics, id) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item xs={12} sm={6} md={4} key={`${id}123`}>
            <CustomCard
              image={comics.image}
              imageAlt={comics.imageAlt}
              name={comics.name}
              description={comics.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Comics;
