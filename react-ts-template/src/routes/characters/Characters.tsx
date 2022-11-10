import React, { FC } from 'react';
import { Grid } from '@mui/material';

import CustomCard from 'components/card';

import charactersData from 'mocks/charactersData';

const Characters: FC = () => {
  return (
    <Grid container spacing={2}>
      {charactersData.map((character, id) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid item key={`${id}123`}>
          <CustomCard
            image={character.image}
            imageAlt={character.imageAlt}
            name={character.name}
            description={character.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Characters;
