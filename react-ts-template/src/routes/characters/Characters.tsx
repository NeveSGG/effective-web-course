import React, { FC } from 'react';
import { Grid, Box, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';

import CustomCard from 'components/card';
import Search from 'components/search';

import charactersData from 'mocks/charactersData';

const Characters: FC = () => {
  const { t } = useTranslation();
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
          <>{t('Characters')}</>
        </Typography>
        <Typography variant="h5" sx={{ pb: { xs: 1, sm: 2 } }} gutterBottom>
          (9)
        </Typography>
      </Box>
      <Search searchText="Characters" />
      <Grid container spacing={2}>
        {charactersData.map((character, id) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item xs={12} sm={6} md={4} key={`${id}123`}>
            <CustomCard {...character} pathname="/" />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Characters;
