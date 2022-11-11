import React, { FC } from 'react';
import { Grid, Box, Typography } from '@mui/material';

import CustomCard from 'components/card';
import Search from 'components/search';

import seriesData from 'mocks/seriesData';

const Series: FC = () => {
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
          Series
        </Typography>
        <Typography variant="h5" sx={{ pb: 2 }} gutterBottom>
          (3)
        </Typography>
      </Box>
      <Search searchText="Series" />
      <Grid container spacing={2}>
        {seriesData.map((series, id) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item key={`${id}123`}>
            <CustomCard
              image={series.image}
              imageAlt={series.imageAlt}
              name={series.name}
              description={series.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Series;
