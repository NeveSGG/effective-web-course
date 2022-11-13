import React, { FC } from 'react';
import { Grid, Box, Typography } from '@mui/material';

import CustomCard from 'components/card';

import charactersData from 'mocks/charactersData';
import Search from 'components/search';

const Characters: FC = () => {
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
          Characters
        </Typography>
        <Typography variant="h5" sx={{ pb: { xs: 1, sm: 2 } }} gutterBottom>
          (9)
        </Typography>
      </Box>
      <Search searchText="Characters by Name" />
      <Grid container spacing={2}>
        {charactersData.map((character, id) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item xs={12} sm={6} md={4} key={`${id}123`}>
            <CustomCard
              image={character.image}
              imageAlt={character.imageAlt}
              name={character.name}
              description={character.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Characters;
