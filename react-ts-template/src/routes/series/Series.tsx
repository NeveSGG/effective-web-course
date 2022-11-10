import React, { FC } from 'react';
import { Grid } from '@mui/material';

import CustomCard from 'components/card';

import seriesData from 'mocks/seriesData';

const Series: FC = () => {
  return (
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
  );
};

export default Series;
