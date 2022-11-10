import React, { FC } from 'react';
import { Grid } from '@mui/material';

import CustomCard from 'components/card';

import comicsData from 'mocks/comicsData';

const Comics: FC = () => {
  return (
    <Grid container spacing={2}>
      {comicsData.map((comics, id) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid item key={`${id}123`}>
          <CustomCard
            image={comics.image}
            imageAlt={comics.imageAlt}
            name={comics.name}
            description={comics.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Comics;
